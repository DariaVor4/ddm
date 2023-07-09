import { Injectable, Logger } from '@nestjs/common';
import * as process from 'process';
import type { PartialDeep, ReadonlyDeep } from 'type-fest';
import path from 'path';
import { NodeEnvEnum } from './node-env.enum';
import { joi, vercelMsValidator } from '../common';

/**
 * Interface for typing the application startup configuration.
 * Also provides connection data to various services.
 */
export interface IAppConfig {
  nodeEnv: NodeEnvEnum;
  port: number;
  filesStoragePath: string;
  // Bots
  telegramBotToken: string;
  vkBotToken: string;
  // Mailer
  mailer: {
    host: string;
    user: string;
    password: string;
    defaultFrom: string;
  },
  // Confirm code
  confirm: {
    codeLength: number;
    emailCodeExpires: string;
    phoneCodeExpires: string;
  },
  // Security
  bcryptRounds: number;
  accessTokenSecret: string;
  accessTokenExpires: string;
  refreshTokenSecret: string;
  refreshTokenExpires: string;
}

/**
 * Service that receives startup configuration of the whole application
 */
@Injectable()
export class ConfigService {
  private static appConfig: IAppConfig;

  private readonly appConfig: IAppConfig;

  /**
   * Method for getting the loaded application configuration
   */
  public get config(): ReadonlyDeep<IAppConfig> {
    return this.appConfig;
  }

  /**
   * Static method for getting the loaded application configuration.
   */
  static get config(): ReadonlyDeep<IAppConfig> {
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
      port: Number(process.env.VISCEN_PORT),
      filesStoragePath: process.env.VISCEN_FILES_STORAGE_PATH,
      // Bots
      telegramBotToken: process.env.VISCEN_TELEGRAM_BOT_TOKEN,
      vkBotToken: process.env.VISCEN_VK_BOT_TOKEN,
      // Mailer
      mailer: {
        host: process.env.VISCEN_MAILER_HOST,
        user: process.env.VISCEN_MAILER_USER,
        password: process.env.VISCEN_MAILER_PASSWORD,
        defaultFrom: process.env.VISCEN_MAILER_DEFAULT_FROM,
      },
      // Confirm code
      confirm: {
        codeLength: Number(process.env.VISCEN_CONFIRM_CODE_LEN),
        emailCodeExpires: process.env.VISCEN_CONFIRM_EMAIL_CODE_EXP,
        phoneCodeExpires: process.env.VISCEN_CONFIRM_PHONE_CODE_EXP,
      },
      // Security
      bcryptRounds: Number(process.env.VISCEN_PASSWORD_BCRYPT_ROUNDS),
      accessTokenSecret: process.env.VISCEN_ACCESS_TOKEN_SECRET,
      accessTokenExpires: process.env.VISCEN_ACCESS_TOKEN_EXPIRES,
      refreshTokenSecret: process.env.VISCEN_REFRESH_TOKEN_SECRET,
      refreshTokenExpires: process.env.VISCEN_REFRESH_TOKEN_EXPIRES,
    } satisfies PartialDeep<IAppConfig>);
    if (error) {
      throw new Error(error.message);
    }
    this.appConfig = value;
    ConfigService.appConfig = value;
    this.logger.log('Environment successfully loaded!');
  }

  private appConfigSchema = () => joi.object<IAppConfig>({
    nodeEnv: joi.string().valid('prod', 'dev', 'test').required(),
    port: joi.number().port().optional().default(5000),
    filesStoragePath: joi.string().optional().default(path.join(require.main!.path, 'files_storage')),
    // Bots
    telegramBotToken: joi.string().required(),
    vkBotToken: joi.string().required(),
    // Mailer
    mailer: joi.object<IAppConfig['mailer']>({
      host: joi.string().required(),
      user: joi.string().email().required(),
      password: joi.string().required(),
      defaultFrom: joi.string().optional().default(joi.ref('user')),
    }).required(),
    // Confirm code
    confirm: joi.object<IAppConfig['confirm']>({
      codeLength: joi.number().min(3).optional().default(6),
      emailCodeExpires: joi.string().custom(vercelMsValidator).optional().default('15m'),
      phoneCodeExpires: joi.string().custom(vercelMsValidator).optional().default('15m'),
    }).required(),
    // Security
    bcryptRounds: joi.number().min(6).optional().default(10),
    accessTokenSecret: joi.string().required(),
    accessTokenExpires: joi.string().custom(vercelMsValidator).optional().default('15m'),
    refreshTokenSecret: joi.string().required(),
    refreshTokenExpires: joi.string().custom(vercelMsValidator).optional().default('1d'),
  });
}
