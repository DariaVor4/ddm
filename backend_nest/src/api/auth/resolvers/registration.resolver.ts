import {
  Args, Context, Mutation, Query, Resolver,
} from '@nestjs/graphql';
import {
  InternalServerErrorException, Logger, NotAcceptableException, Req, Res,
} from '@nestjs/common';
import ms from 'ms';
import { Request, Response } from 'express';
import { assert } from '@common';
import * as uuid from 'uuid';
import { PublicEndpoint } from '../decorators/public.decorator';
import { Roles } from '../decorators/roles.decorator';
import UserRoleEnum from '../interfaces/user-role.enum';
import { CookieKeys } from '../types/cookie-keys';
import { CookiesPick } from '../decorators/cookies-pick.decorator';
import { PrismaService } from '../../../prisma/prisma.service';
import { ConfigService } from '../../../config/config.service';
import { EmailService } from '../../../email/email.service';
import EmailAvailabilityResponse from '../responses/email-availability.response';
import { EmailAvailabilityVerdictEnum } from '../types/email-verdict.enum';
import { AuthService } from '../auth.service';
import { UserService } from '../../user/user.service';

/**
 * Резолвер общих вспомогательных методов для регистрации.
 */
@Resolver()
export class RegistrationResolver {
  private readonly logger = new Logger(RegistrationResolver.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly emailService: EmailService,
    private readonly authService: AuthService,
    private readonly userService: UserService,
  ) {}

  /**
   * Проверка почты на корректность и доступность
   */
  @Query(() => EmailAvailabilityResponse, {
    description: 'Проверка почты на корректность и доступность',
  })
  @PublicEndpoint()
  @Roles(UserRoleEnum.Any)
  async emailAvailability(
    @Args('email') email: string,
  ): Promise<EmailAvailabilityResponse> {
    const verdict = await this.userService.isEmailFree(email, { notThrow: true });
    switch (verdict) {
      case true:
        return {
          verdict: EmailAvailabilityVerdictEnum.Ok,
          message: 'Почта доступна',
        };
      case false:
        return {
          verdict: EmailAvailabilityVerdictEnum.Occupied,
          message: 'Почта занята',
        };
      case null:
        return {
          verdict: EmailAvailabilityVerdictEnum.Incorrect,
          message: 'Некорректный email',
        };
      default:
        throw new InternalServerErrorException(`Unexpected email verdict: ${verdict satisfies never}`);
    }
  }

  /**
   * Отправка кода подтверждения почты.
   * Устанавливает RegistrationToken в cookies.
   * Возвращает время до которого необходимо завершить регистрацию.
   */
  @Mutation(() => Date, {
    description: 'Отправка кода подтверждения почты. Устанавливает RegistrationToken в cookies. Возвращает время до которого необходимо завершить регистрацию.',
  })
  @PublicEndpoint()
  @Roles(UserRoleEnum.Any)
  async sendConfirmationCode(
    @Args('email') email: string,
    @Context('res') res: Response,
  ): Promise<Date> {
    // Проверка почты на корректность и доступность
    const emailVerdict = await this.emailAvailability(email);
    assert(emailVerdict.verdict === EmailAvailabilityVerdictEnum.Ok, new NotAcceptableException(emailVerdict.message));
    // Сгенерировать код
    const code = await this.authService.generateSingleUseCode();
    const registrationTimeOut = Date.now() + ms(this.configService.config.emailConfirmationCodeExpires);
    // Сохранение изменений в БД
    await this.prisma.$transaction(async (prisma) => {
      // Запись кода подтверждения в базу данных
      // + Отправка письма с кодом подтверждения
      const [confirmationEmail, emailResult] = await Promise.all([
        prisma.confirmationEmailEntity.create({ data: { email, code } }),
        this.emailService.sendSimpleText({
          email,
          subject: 'Подтверждение электронной почты',
          message: `Код подтверждения вашей электронной почты: ${code}`,
        }).catch((error) => {
          this.logger.error(error);
          throw new InternalServerErrorException('К сожалению, не удалось отправить код подтверждения');
        }),
      ]);
      assert(
        emailResult.accepted.includes(email),
        new InternalServerErrorException('К сожалению, не удалось отправить код подтверждения'),
      );
      // Поместить RegistrationToken в cookies
      this.authService.putTextIntoCookies({
        res,
        key: CookieKeys.RegistrationTokenKey,
        text: confirmationEmail.id,
        expires: new Date(registrationTimeOut),
      });
    });

    return new Date(registrationTimeOut);
  }

  /**
   * Подтверждение электронной почты кодом.
   * Возвращает true, если почта успешно подтверждена.
   */
  @Mutation(() => Boolean, {
    description: 'Подтверждение электронной почты кодом. Возвращает true, если почта успешно подтверждена.',
  })
  @PublicEndpoint()
  @Roles(UserRoleEnum.Any)
  async emailConfirmByCode(
    @Args('email') email: string,
    @Args('code') code: string,
    @Context('req') req: Request,
    @CookiesPick(CookieKeys.RegistrationTokenKey) registrationToken: string,
  ): Promise<boolean> {
    this.logger.debug(`RegistrationTokenKey: ${req.cookies.RegistrationToken}`);
    this.logger.debug(`emailConfirmByCode: ${email} ${code} ${registrationToken}`);
    assert(
      uuid.validate(registrationToken),
      new NotAcceptableException('Код подтверждения истёк или вы его не запрашивали.'),
    );
    const confirmationEmail = await this.prisma.confirmationEmailEntity.findUnique({
      where: { id: registrationToken },
    });
    assert(
      confirmationEmail?.isConfirmed === false,
      new NotAcceptableException('Заявка на подтверждение почты не найдена'),
    );
    assert(confirmationEmail.email === email, new NotAcceptableException('Почтовые адреса не совпадают'));
    assert(confirmationEmail.code === code, new NotAcceptableException('Неверный код подтверждения'));
    await this.prisma.confirmationEmailEntity.update({
      where: { id: registrationToken },
      data: { isConfirmed: true },
    });
    return true;
  }
}
