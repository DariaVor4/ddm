import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Logger, NotAcceptableException } from '@nestjs/common';
import { _throw, assert } from '@common';
import * as uuid from 'uuid';
import { compact } from 'lodash';
import { PrismaService } from '../../../prisma/prisma.service';
import { EmailService } from '../../../email/email.service';
import { StudentService } from '../student.service';
import { PublicEndpoint } from '../../auth/decorators/public.decorator';
import { Roles } from '../../auth/decorators/roles.decorator';
import UserRoleEnum from '../../auth/interfaces/user-role.enum';
import StudentCreateInput from '../inputs/student-create.input';
import { CookiesPick } from '../../auth/decorators/cookies-pick.decorator';
import { CookieKeys } from '../../auth/types/cookie-keys';

@Resolver('student-registration')
export class StudentRegistrationResolver {
  private readonly logger = new Logger(StudentRegistrationResolver.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly emailService: EmailService,
    private readonly studentService: StudentService,
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
    @Args('input') input: StudentCreateInput,
    @CookiesPick(CookieKeys.RegistrationTokenKey) registrationToken: string,
  ): Promise<boolean> {
    assert(uuid.validate(registrationToken), new NotAcceptableException('Необходимо подтвердить почтовый адрес.'));
    const confirmationEmail = await this.prisma.confirmationEmailEntity.findFirstOrThrow({
      where: { id: registrationToken, email: input.email, isConfirmed: true },
    }).catch(_throw(new NotAcceptableException('Необходимо подтвердить почтовый адрес.')));
    await this.studentService.studentCreate(input);
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
