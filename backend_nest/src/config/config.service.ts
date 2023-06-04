import { assert, joi, vercelMsValidator } from '@common';
import { Injectable, Logger } from '@nestjs/common';
import dotenv from 'dotenv';
import * as process from 'process';
import type { ReadonlyDeep } from 'type-fest';
import path from 'path';

/**
 * Interface for typing the application startup configuration.
 * Also provides connection data to various services.
 */
export interface IAppConfig {
  nodeEnv: 'production' | 'development' | 'test';

  mailerHost: string;
  mailerUser: string;
  mailerPassword: string;
  mailerDefaultFrom: string;

  confirmationCodeLength: number;
  emailConfirmationCodeExpires: string;
  phoneConfirmationCodeExpires: string;
  bcryptRounds: number;

  accessTokenSecret: string;
  accessTokenExpires: string;

  refreshTokenSecret: string;
  refreshTokenExpires: string;

  filesStoragePath: string;
}

/**
 * Service that receives startup configuration of the whole application
 */
@Injectable()
export class ConfigService {
  private readonly appConfig: IAppConfig;

  /**
   * Method for getting the loaded application configuration
   */
  public get config(): ReadonlyDeep<IAppConfig> {
    return this.appConfig;
  }

  private logger = new Logger(ConfigService.name);

  /**
   * Config Constructor: tries to read env.CONFIG_PATH or 'config.${NODE_ENV}.json'.
   * Performs initialization for use of the getConfig() method.
   */
  constructor() {
    dotenv.config({ path: path.join(process.cwd(), `.env.${process.env.NODE_ENV}`) });

    this.appConfig = {
      nodeEnv: process.env.NODE_ENV,

      mailerHost: process.env.MAILER_HOST,
      mailerUser: process.env.MAILER_USER,
      mailerPassword: process.env.MAILER_PASSWORD,
      mailerDefaultFrom: process.env.MAILER_DEFAULT_FROM,

      confirmationCodeLength: Number(process.env.CONFIRMATION_CODE_LENGTH),
      emailConfirmationCodeExpires: process.env.EMAIL_CONFIRMATION_CODE_EXPIRES,
      phoneConfirmationCodeExpires: process.env.PHONE_CONFIRMATION_CODE_EXPIRES,
      bcryptRounds: Number(process.env.PASSWORD_BCRYPT_ROUNDS),

      accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
      accessTokenExpires: process.env.ACCESS_TOKEN_EXPIRES,

      refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
      refreshTokenExpires: process.env.REFRESH_TOKEN_EXPIRES,

      filesStoragePath: process.env.FILES_STORAGE_PATH!,
    };

    const { error } = this.appConfigSchema().validate(this.appConfig);
    assert(!error, new Error(error?.message));

    this.logger.log(`Environment successfully loaded from .env.${process.env.NODE_ENV}`);
  }

  private appConfigSchema = () => joi.object<IAppConfig>({
    nodeEnv: joi.string().valid('production', 'development', 'test').required(),

    mailerHost: joi.string().required(),
    mailerUser: joi.string().email().required(),
    mailerPassword: joi.string().required(),
    mailerDefaultFrom: joi.string().required(),

    confirmationCodeLength: joi.number().min(3).required(),
    emailConfirmationCodeExpires: joi.string().custom(vercelMsValidator).required(),
    phoneConfirmationCodeExpires: joi.string().custom(vercelMsValidator).required(),
    bcryptRounds: joi.number().min(6).required(),

    accessTokenSecret: joi.string().required(),
    accessTokenExpires: joi.string().custom(vercelMsValidator).required(),

    refreshTokenSecret: joi.string().required(),
    refreshTokenExpires: joi.string().custom(vercelMsValidator).required(),

    filesStoragePath: joi.string().optional().default(path.join(require.main!.path, 'files_storage')),
  });
}
