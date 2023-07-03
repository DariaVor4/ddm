/* eslint-disable @typescript-eslint/no-unused-vars,@typescript-eslint/consistent-type-definitions */
// noinspection JSUnusedGlobalSymbols

namespace NodeJS {
  import { NodeEnvEnum } from './config/node-env.enum';

  type ProcessEnv = {
    VISCEN_NODE_ENV: NodeEnvEnum;

    VISCEN_MAILER_HOST: string;
    VISCEN_MAILER_USER: string;
    VISCEN_MAILER_PASSWORD: string;
    VISCEN_MAILER_DEFAULT_FROM: string;

    VISCEN_CONFIRM_CODE_LEN?: string;
    VISCEN_CONFIRM_EMAIL_CODE_EXP?: string;
    VISCEN_CONFIRM_PHONE_CODE_EXP?: string;
    VISCEN_PASSWORD_BCRYPT_ROUNDS?: string;

    VISCEN_ACCESS_TOKEN_SECRET: string;
    VISCEN_ACCESS_TOKEN_EXPIRES?: string;

    VISCEN_REFRESH_TOKEN_SECRET: string;
    VISCEN_REFRESH_TOKEN_EXPIRES?: string;

    VISCEN_PORT?: string;
    VISCEN_FILES_STORAGE_PATH?: string;
  };
}
