import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLUUID, GraphQLEmailAddress, GraphQLURL } from 'graphql-scalars';
import { AuthModule } from './api/auth/auth.module';
import { JwtGuard } from './api/auth/guards/jwt.guard';
import { RolesGuard } from './api/auth/guards/roles.guard';
import { ConfigModule } from './config/config.module';
import { EmailModule } from './email/email.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './api/user/user.module';
import { EmployeeModule } from './api/employee/employee.module';
import { StudentModule } from './api/student/student.module';
import { StudentPassportModule } from './api/student-passport/student-passport.module';
import { StudentArrivalNoticeModule } from './api/student-arrival-notice/student-arrival-notice.module';
import { StudentCloseRelativeModule } from './api/student-close-relative/student-close-relative.module';
import { StudentMigrationCardModule } from './api/student-migration-card/student-migration-card.module';
import { StudentVisaModule } from './api/student-visa/student-visa.module';
import { VisaRequestModule } from './api/visa-request/visa-request.module';
import { FileModule } from './api/file/file.module';
import { NotificationModule } from './api/notification/notification.module';

@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      context: ({ req, res }: any) => ({ req, res }),
      autoSchemaFile: './dist/schema.gql',
      resolvers: {
        UUID: GraphQLUUID,
        EmailAddress: GraphQLEmailAddress,
        // URL: GraphQLURL,
      },
      // subscriptions
      // subscriptions: {
      //   'graphql-ws': true,
      // },
    }),
    AuthModule,
    PrismaModule,
    UserModule,
    EmailModule,
    StudentModule,
    EmployeeModule,
    StudentPassportModule,
    StudentArrivalNoticeModule,
    StudentCloseRelativeModule,
    StudentMigrationCardModule,
    StudentVisaModule,
    VisaRequestModule,
    FileModule,
    NotificationModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: JwtGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AppModule {}
