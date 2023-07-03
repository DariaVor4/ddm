import { strictCopyMerge } from '@common/lodash/strict-copy-merge';
import { NodeEnvEnum } from '../config/node-env.enum';

const isDev = process.env.VISCEN_NODE_ENV === NodeEnvEnum.Dev;
const isTest = process.env.VISCEN_NODE_ENV === NodeEnvEnum.Test;
const isDebug = isDev || isTest;
const isProd = process.env.VISCEN_NODE_ENV === NodeEnvEnum.Prod;

/**
 * Статичные проверки на режим запуска приложения.
 */
export const runtimeMode = strictCopyMerge(process.env.VISCEN_NODE_ENV as NodeEnvEnum, {
  isDev,
  isTest,
  isDebug,
  isProd,
} as const);
