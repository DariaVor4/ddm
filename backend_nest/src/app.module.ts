import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { ApiModule } from './api/api.module';
import { AuthService } from './api/auth/auth.service';
import { JwtGuard } from './api/auth/guards/jwt.guard';
import { RolesGuard } from './api/auth/guards/roles.guard';
import { BotsModule } from './bots/bots.module';
import { ConfigModule } from './config/config.module';
import { EmailModule } from './email/email.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    ConfigModule,
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      inject: [AuthService],
      imports: [ApiModule],
      driver: ApolloDriver,
      useFactory: (authService: AuthService) => ({
        driver: ApolloDriver,
        playground: true,
        context: (data: any) => data,
        autoSchemaFile: './dist/schema.gql',
        subscriptions: {
          'graphql-ws': {
            onConnect: authService.onConnectWs, // Проверка токенов авторизации в заголовках.
          },
        },
      }),
    }),
    PrismaModule,
    EmailModule,
    ApiModule,
    BotsModule,
  ],
  providers: [
    { provide: APP_GUARD, useClass: JwtGuard },
    { provide: APP_GUARD, useClass: RolesGuard },
  ],
})
export class AppModule {}
