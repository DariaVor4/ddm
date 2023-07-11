import { NodeEnvEnum } from '../config/node-env.enum';
import { strictAdditionalMerge } from './lodash';

const isDev = process.env.VISCEN_NODE_ENV === NodeEnvEnum.Dev;
const isTest = process.env.VISCEN_NODE_ENV === NodeEnvEnum.Test;
const isDebug = isDev || isTest;
const isProd = process.env.VISCEN_NODE_ENV === NodeEnvEnum.Prod;

/**
 * Статичные проверки на режим запуска приложения.
 */
export const runtimeMode = strictAdditionalMerge(process.env.VISCEN_NODE_ENV as NodeEnvEnum, {
  isDev,
  isTest,
  isDebug,
  isProd,
} as const);
