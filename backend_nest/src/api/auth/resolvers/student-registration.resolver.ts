// import assert from '@common/assert';
// import joi from '@common/joi-configured';
// import { InternalServerErrorException, NotAcceptableException } from '@nestjs/common';
// import {
//   Args, Context, Int, Mutation, Query, Resolver,
// } from '@nestjs/graphql';
// import { Response } from 'express';
// import { compact, isNil } from 'lodash';
// import ms from 'ms';
// import { validate } from 'uuid';
// import { ConfigService } from '../../config/config.service';
// import { EmailService } from '../../email/email.service';
// import { PrismaService } from '../../prisma/prisma.service';
// import { SecurityService } from '../../security/security.service';
// import { CookieKeys } from './cookie-keys';
// import { PickCookies } from './decorators/pick-cookies.decorator';
// import { PublicEndpoint } from './decorators/public.decorator';
// import { Roles } from './decorators/roles.decorator';
// import StudentCreateInput from './inputs/student-registration.input';
// import UserRoleEnum from './interfaces/UserRoleEnum';
// import EmailVerdictEnum from './email-verdict.enum';
//
// @Resolver()
// export class StudentRegistrationResolver {
//   constructor(
//     private readonly prisma: PrismaService,
//     private readonly configService: ConfigService,
//     private readonly securityService: SecurityService,
//     private readonly emailService: EmailService,
//   ) {}
//
//   @Query(() => EmailVerdictEnum, {
//     description: 'Проверка почты на доступность для нового пользователя.',
//   })
//   @PublicEndpoint()
//   @Roles(UserRoleEnum.Any)
//   async emailIsOccupied(
//     @Args('email') email: string,
//   ): Promise<EmailVerdictEnum> {
//     if (joi.string().email().required().validate(email).error) {
//       return EmailVerdictEnum.InvalidEmail;
//     }
//     if (await this.prisma.user.findUnique({ where: { email } })) {
//       return EmailVerdictEnum.EmailAlreadyInUse;
//     }
//     return EmailVerdictEnum.Ok;
//   }
//
//   @Mutation(() => Number, {
//     description: 'Отправка кода подтверждения почты. Устанавливает RegistrationToken в cookies. Возвращает время до которого необходимо завершить регистрацию.',
//   })
//   @PublicEndpoint()
//   @Roles(UserRoleEnum.Any)
//   async studentEmailSendConfirmationCode(
//     @Args('email') email: string,
//     @Context('res') res: Response,
//   ): Promise<number> {
//     const emailVerdict = await this.emailIsOccupied(email);
//     assert(emailVerdict === EmailVerdictEnum.Ok, new NotAcceptableException(emailVerdict));
//
//     const registrationTimeOut = Date.now() + ms(this.configService.config.emailConfirmationCodeExpires);
//     await this.prisma.$transaction(async (prisma) => {
//       // Generate Code
//       const code = this.securityService.generateSingleUseCode();
//       // Create Confirmation Email Entity
//       const confirmationEmail = await prisma.confirmationEmail.create({ data: { email, code } });
//       // Put RegistrationToken into cookies
//       this.securityService.putTextIntoCookies({
//         res,
//         key: CookieKeys.RegistrationTokenKey,
//         text: confirmationEmail.id,
//         expires: new Date(registrationTimeOut),
//       });
//       // Send Email
//       await this.emailService.sendSimpleText({
//         email,
//         subject: 'Подтверждение электронной почты',
//         message: `Код подтверждения вашей электронной почты: ${code}`,
//       }).then((result) => {
//         assert(
//           result.accepted.includes(email),
//           new InternalServerErrorException('К сожалению, не удалось отправить код подтверждения'),
//         );
//       }).catch(() => {
//         throw new InternalServerErrorException('К сожалению, не удалось отправить код подтверждения');
//       });
//     }, { timeout: ms('30s') });
//
//     return registrationTimeOut;
//   }
//
//   @Mutation(() => Boolean, {
//     description: 'Подтверждение электронной почты кодом. Возвращает true, если почта подтверждена.',
//   })
//   @PublicEndpoint()
//   @Roles(UserRoleEnum.Any)
//   async studentEmailConfirmByCode(
//     @Args('email') email: string,
//     @Args('code') code: string,
//     @PickCookies(CookieKeys.RegistrationTokenKey) registrationToken: string,
//   ): Promise<boolean> {
//     assert(
//       validate(registrationToken),
//       new NotAcceptableException('Код подтверждения истёк или вы его не запрашивали.'),
//     );
//     const confirmationEmail = await this.prisma.confirmationEmail.findUnique({
//       where: { id: registrationToken },
//     });
//     assert(
//       confirmationEmail?.isConfirmed === false,
//       new NotAcceptableException('Заявка на подтверждение почты не найдена'),
//     );
//     assert(confirmationEmail.email === email, new NotAcceptableException('Почтовые адреса не совпадают'));
//     assert(confirmationEmail.code === code, new NotAcceptableException('Неверный код подтверждения'));
//     await this.prisma.confirmationEmail.update({
//       where: { id: registrationToken },
//       data: { isConfirmed: true },
//     });
//     return true;
//   }
//
//   @Mutation(() => Boolean, {
//     description: 'Создание аккаунта студента. Необходимо сначала подтвердить почту.',
//   })
//   @PublicEndpoint()
//   @Roles(UserRoleEnum.Any)
//   async studentRegistration(
//     @Args('input') input: StudentCreateInput,
//     @PickCookies(CookieKeys.RegistrationTokenKey) registrationToken: string,
//   ): Promise<boolean> {
//     assert(validate(registrationToken), new NotAcceptableException('Необходимо подтвердить почтовый адрес.'));
//     const confirmationEmail = await this.prisma.confirmationEmail.findUnique({
//       where: { id: registrationToken },
//     });
//     assert(confirmationEmail?.isConfirmed, new NotAcceptableException('Сначала необходимо подтвердить почту'));
//     assert(confirmationEmail.email === input.email, new NotAcceptableException('Почтовые адреса не совпадают'));
//     assert(
//       isNil(await this.prisma.user.findUnique({ where: { email: input.email } })),
//       new NotAcceptableException('Почтовый адрес уже занят'),
//     );
//     await this.prisma.user.create({
//       data: {
//         email: confirmationEmail.email,
//         password: await this.securityService.passwordHash(input.password),
//         student: {
//           create: {
//             curator: input.curator,
//             faculty: input.faculty,
//             course: input.course,
//             group: input.group,
//             phone: input.phone,
//             passport: {
//               create: {
//                 lastName: input.lastName,
//                 firstName: input.firstName,
//                 patronymic: input.patronymic,
//               },
//             },
//           },
//         },
//       },
//     });
//     await this.emailService.sendSimpleText({
//       email: confirmationEmail.email,
//       subject: 'Подтверждение электронной почты',
//       name: compact([input.lastName, input.firstName, input.patronymic]).join(' ') || undefined,
//       message: 'Вы успешно зарегистрированы в Визовом Центре ВолгГТУ',
//     }).catch(() => {
//       console.error('Не удалось отправить письмо о завершении регистрации');
//     });
//     return true;
//   }
// }
