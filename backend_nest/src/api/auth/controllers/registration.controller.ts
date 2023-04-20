import assert from '@common/assert';
import joi from '@common/joi-configured';
import {
  Body,
  Controller,
  InternalServerErrorException,
  Logger,
  NotAcceptableException,
  Post, Req,
  Res,
} from '@nestjs/common';
import { Response, Request } from 'express';
import ms from 'ms';
import { ConfigService } from 'src/config/config.service';
import { EmailService } from 'src/email/email.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { SecurityService } from 'src/security/security.service';
import * as uuid from 'uuid';
import { CookieKeys } from '../types/cookie-keys';
import { PublicEndpoint } from '../decorators/public.decorator';
import { Roles } from '../decorators/roles.decorator';
import UserRoleEnum from '../interfaces/UserRoleEnum';
import { PickCookies } from '../decorators/pick-cookies.decorator';

@Controller('registration')
export class RegistrationController {
  private readonly logger = new Logger(RegistrationController.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
    private readonly securityService: SecurityService,
    private readonly emailService: EmailService,
  ) {}

  /**
   * Проверка почты на корректность и доступность
   */
  @Post('emailAvailability')
  @PublicEndpoint()
  @Roles(UserRoleEnum.Any)
  async emailAvailability(
    @Body('email') email: string,
  ) {
    if (joi.string().email().required().validate(email).error) {
      return {
        statues: 'incorrect',
        message: 'Некорректный email',
      } as const;
    }
    const alreadyOccupied = await Promise.all([
      this.prisma.user.findUnique({ where: { email } }),
      this.prisma.confirmationEmail.findFirst({
        where: {
          email,
          isConfirmed: true,
          createdAt: {
            lt: new Date(Date.now() + ms(this.configService.config.emailConfirmationCodeExpires)),
          },
        },
      }),
    ]);
    if (alreadyOccupied.reduce<boolean>((acc, cur) => acc || !!cur, false)) {
      return {
        statues: 'occupied',
        message: 'Почта уже занята',
      } as const;
    }
    return {
      statues: 'ok',
      message: 'Почта доступна',
    } as const;
  }

  /**
   * Отправка кода подтверждения почты.
   * Устанавливает RegistrationToken в cookies.
   * Возвращает время до которого необходимо завершить регистрацию.
   */
  @Post('sendConfirmationCode')
  @PublicEndpoint()
  @Roles(UserRoleEnum.Any)
  async sendConfirmationCode(
    @Body('email') email: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    // Проверка почты на корректность и доступность
    const emailVerdict = await this.emailAvailability(email);
    assert(emailVerdict.statues === 'ok', new NotAcceptableException(emailVerdict));

    // Сгенерировать код
    const code = this.securityService.generateSingleUseCode();
    const registrationTimeOut = Date.now() + ms(this.configService.config.emailConfirmationCodeExpires);

    await this.prisma.$transaction(async (prisma) => {
      // Запись кода подтверждения в базу данных
      // + Отправить письмо c кодом подтверждения
      const [confirmationEmail, emailResult] = await Promise.all([
        prisma.confirmationEmail.create({ data: { email, code } }),
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
      this.securityService.putTextIntoCookies({
        res,
        key: CookieKeys.RegistrationTokenKey,
        text: confirmationEmail.id,
        expires: new Date(registrationTimeOut),
      });
    });

    return { registrationTimeOut };
  }

  /**
   * Подтверждение электронной почты кодом.
   * Возвращает true, если почта успешно подтверждена.
   */
  @Post('emailConfirmByCode')
  @PublicEndpoint()
  @Roles(UserRoleEnum.Any)
  async emailConfirmByCode(
    @Body('email') email: string,
    @Body('code') code: string,
    @Req() req: Request,
    @PickCookies(CookieKeys.RegistrationTokenKey) registrationToken: string,
  ): Promise<boolean> {
    console.log('RegistrationTokenKey: ', req.cookies.RegistrationToken);
    this.logger.debug(`emailConfirmByCode: ${email} ${code} ${registrationToken}`);
    assert(
      uuid.validate(registrationToken),
      new NotAcceptableException('Код подтверждения истёк или вы его не запрашивали.'),
    );
    const confirmationEmail = await this.prisma.confirmationEmail.findUnique({
      where: { id: registrationToken },
    });
    assert(
      confirmationEmail?.isConfirmed === false,
      new NotAcceptableException('Заявка на подтверждение почты не найдена'),
    );
    assert(confirmationEmail.email === email, new NotAcceptableException('Почтовые адреса не совпадают'));
    assert(confirmationEmail.code === code, new NotAcceptableException('Неверный код подтверждения'));
    await this.prisma.confirmationEmail.update({
      where: { id: registrationToken },
      data: { isConfirmed: true },
    });
    return true;
  }
}
