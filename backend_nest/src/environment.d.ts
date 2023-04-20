/* eslint-disable @typescript-eslint/no-unused-vars,@typescript-eslint/consistent-type-definitions */
// noinspection JSUnusedGlobalSymbols

namespace NodeJS {
  type ProcessEnv = {
    NODE_ENV: 'production' | 'development' | 'test';

    MAILER_HOST: string;
    MAILER_USER: string;
    MAILER_PASSWORD: string;
    MAILER_DEFAULT_FROM: string;

    CONFIRMATION_CODE_LENGTH: string;
    EMAIL_CONFIRMATION_CODE_EXPIRES: string;
    PHONE_CONFIRMATION_CODE_EXPIRES: string;
    PASSWORD_BCRYPT_ROUNDS: string;

    ACCESS_TOKEN_SECRET: string;
    ACCESS_TOKEN_EXPIRES: string;

    REFRESH_TOKEN_SECRET: string;
    REFRESH_TOKEN_EXPIRES: string;
  };
}
