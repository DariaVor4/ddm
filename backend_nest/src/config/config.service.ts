import { assert, joi, vercelMsValidator } from '@common';
import { Injectable, Logger } from '@nestjs/common';
import * as process from 'process';
import type { PartialDeep, ReadonlyDeep } from 'type-fest';
import path from 'path';
import { NodeEnvEnum } from './node-env.enum';

/**
 * Interface for typing the application startup configuration.
 * Also provides connection data to various services.
 */
export interface IAppConfig {
  nodeEnv: NodeEnvEnum;

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

  port: number;
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
   * Config Constructor.
   * Performs initialization for use of the getConfig() method.
   */
  constructor() {
    const { value, error } = this.appConfigSchema().validate({
      nodeEnv: process.env.VISCEN_NODE_ENV,

      mailerHost: process.env.VISCEN_MAILER_HOST,
      mailerUser: process.env.VISCEN_MAILER_USER,
      mailerPassword: process.env.VISCEN_MAILER_PASSWORD,
      mailerDefaultFrom: process.env.VISCEN_MAILER_DEFAULT_FROM,

      confirmationCodeLength: Number(process.env.VISCEN_CONFIRM_CODE_LEN),
      emailConfirmationCodeExpires: process.env.VISCEN_CONFIRM_EMAIL_CODE_EXP,
      phoneConfirmationCodeExpires: process.env.VISCEN_CONFIRM_PHONE_CODE_EXP,
      bcryptRounds: Number(process.env.VISCEN_PASSWORD_BCRYPT_ROUNDS),

      accessTokenSecret: process.env.VISCEN_ACCESS_TOKEN_SECRET,
      accessTokenExpires: process.env.VISCEN_ACCESS_TOKEN_EXPIRES,

      refreshTokenSecret: process.env.VISCEN_REFRESH_TOKEN_SECRET,
      refreshTokenExpires: process.env.VISCEN_REFRESH_TOKEN_EXPIRES,

      port: Number(process.env.VISCEN_PORT),
      filesStoragePath: process.env.VISCEN_FILES_STORAGE_PATH,
    } satisfies PartialDeep<IAppConfig>);
    if (error) {
      throw new Error(error.message);
    }
    this.appConfig = value;
    this.logger.log('Environment successfully loaded!');
  }

  private appConfigSchema = () => joi.object<IAppConfig>({
    nodeEnv: joi.string().valid('prod', 'dev', 'test').required(),

    mailerHost: joi.string().required(),
    mailerUser: joi.string().email().required(),
    mailerPassword: joi.string().required(),
    mailerDefaultFrom: joi.string().required(),

    confirmationCodeLength: joi.number().min(3).optional().default(6),
    emailConfirmationCodeExpires: joi.string().custom(vercelMsValidator).optional().default('15m'),
    phoneConfirmationCodeExpires: joi.string().custom(vercelMsValidator).optional().default('15m'),
    bcryptRounds: joi.number().min(6).optional().default(10),

    accessTokenSecret: joi.string().required(),
    accessTokenExpires: joi.string().custom(vercelMsValidator).optional().default('15m'),

    refreshTokenSecret: joi.string().required(),
    refreshTokenExpires: joi.string().custom(vercelMsValidator).optional().default('1d'),

    port: joi.number().port().optional().default(5000),
    filesStoragePath: joi.string().optional().default(path.join(require.main!.path, 'files_storage')),
  });
}
