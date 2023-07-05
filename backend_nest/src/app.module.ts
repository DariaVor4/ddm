import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLEmailAddress, GraphQLUUID } from 'graphql-scalars';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from './config/config.module';
import { EmailModule } from './email/email.module';
import { PrismaModule } from './prisma/prisma.module';
import { ApiModule } from './api/api.module';
import { JwtGuard } from './api/auth/guards/jwt.guard';
import { RolesGuard } from './api/auth/guards/roles.guard';
import { BotsModule } from './bots/bots.module';

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
