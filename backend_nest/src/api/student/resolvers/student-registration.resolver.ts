import {
  Args, Context, Mutation, Resolver,
} from '@nestjs/graphql';
import { BadRequestException, Logger, NotAcceptableException } from '@nestjs/common';
import { throwCb } from '@common';
import * as uuid from 'uuid';
import { compact } from 'lodash';
import { Response } from 'express';
import { PrismaService } from '../../../prisma/prisma.service';
import { EmailService } from '../../../email/email.service';
import { StudentService } from '../student.service';
import { PublicEndpoint } from '../../auth/decorators/public.decorator';
import { Roles } from '../../auth/decorators/roles.decorator';
import UserRoleEnum from '../../auth/interfaces/user-role.enum';
import { CookiesPick } from '../../auth/decorators/cookies-pick.decorator';
import { CookieKeysEnum } from '../../auth/enums/cookie-keys.enum';
import StudentUpsertInput from '../inputs/student-upsert.input';
import { AuthService } from '../../auth/auth.service';

@Resolver('student-registration')
export class StudentRegistrationResolver {
  private readonly logger = new Logger(StudentRegistrationResolver.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
    private readonly studentService: StudentService,
    private readonly authService: AuthService,
  ) {}

  /**
   * Регистрация студента.
   * Сначала необходимо подтвердить почту.
   */
  @Mutation(() => Boolean, {
    description: 'Регистрация студента. Сначала необходимо подтвердить почту.',
  })
  @PublicEndpoint()
  @Roles(UserRoleEnum.Any)
  async registration(
    @Args('input') input: StudentUpsertInput,
    @CookiesPick(CookieKeysEnum.RegistrationTokenKey) registrationToken: string,
    @Context('res') res: Response,
  ): Promise<boolean> {
    // Проверка подтверждения почты
    if (!input.email || !input.password) {
      throw new BadRequestException('Почта и пароль обязательны при регистрации.');
    }
    if (!uuid.validate(registrationToken)) {
      throw new NotAcceptableException('Необходимо подтвердить почтовый адрес.');
    }
    const confirmationEmail = await this.prisma.confirmationEmailEntity.findFirstOrThrow({
      where: { id: registrationToken, email: input.email, isConfirmed: true },
    }).catch(throwCb(new NotAcceptableException('Необходимо подтвердить почтовый адрес.')));
    // Сброс токена подтверждения почты
    this.authService.putTextIntoCookies({
      res, key: CookieKeysEnum.RegistrationTokenKey, text: 'null', expires: new Date(),
    });
    // Регистрация студента
    await this.studentService.studentUpsert(input);
    // Отправка письма о завершении регистрации
    await this.emailService.sendSimpleText({
      email: confirmationEmail.email,
      subject: 'Регистрация',
      name: compact([input.lastName, input.firstName, input.patronymic]).join(' ') || undefined,
      message: 'Вы успешно зарегистрированы в Визовом Центре ВолгГТУ!',
    }).catch((error) => {
      this.logger.error(`Не удалось отправить письмо о завершении регистрации: ${error.message}`);
    });
    return true;
  }
}
