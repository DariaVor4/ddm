import {
  Body, Controller, Logger, NotAcceptableException, Post,
} from '@nestjs/common';
import assert from '@common/assert';
import * as uuid from 'uuid';
import _throw from '@common/_throw';
import { compact } from 'lodash';
import { PublicEndpoint } from '../auth/decorators/public.decorator';
import { Roles } from '../auth/decorators/roles.decorator';
import UserRoleEnum from '../auth/interfaces/UserRoleEnum';
import StudentCreateInput from './inputs/student-create.input';
import { PickCookies } from '../auth/decorators/pick-cookies.decorator';
import { CookieKeys } from '../auth/types/cookie-keys';
import { PrismaService } from '../../prisma/prisma.service';
import { SecurityService } from '../../security/security.service';
import { EmailService } from '../../email/email.service';
import { StudentService } from './student.service';

@Controller('student')
export class StudentRegistrationController {
  private readonly logger = new Logger(StudentRegistrationController.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly securityService: SecurityService,
    private readonly emailService: EmailService,
    private readonly studentService: StudentService,
  ) {}

  /**
   * Регистрация студента.
   * Сначала необходимо подтвердить почту.
   */
  @Post('registration')
  @PublicEndpoint()
  @Roles(UserRoleEnum.Any)
  async registration(
    @Body() input: StudentCreateInput,
    @PickCookies(CookieKeys.RegistrationTokenKey) registrationToken: string,
  ): Promise<boolean> {
    assert(uuid.validate(registrationToken), new NotAcceptableException('Необходимо подтвердить почтовый адрес.'));
    const confirmationEmail = await this.prisma.confirmationEmail.findFirstOrThrow({
      where: { id: registrationToken, email: input.email, isConfirmed: true },
    }).catch(_throw(new NotAcceptableException('Необходимо подтвердить почтовый адрес.')));
    await this.studentService.createStudent(input);
    await this.emailService.sendSimpleText({
      email: confirmationEmail.email,
      subject: 'Регистрация',
      name: compact([input.lastName, input.firstName, input.patronymic]).join(' ') || undefined,
      message: 'Вы успешно зарегистрированы в Визовом Центре ВолгГТУ!',
    }).catch(() => {
      this.logger.error('Не удалось отправить письмо о завершении регистрации');
    });
    return true;
  }
}
