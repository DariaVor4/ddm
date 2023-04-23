const isDev = process.env.NODE_ENV === 'development';
const isTest = process.env.NODE_ENV === 'test';
const isDebug = isDev || isTest;
const isProd = process.env.NODE_ENV === 'production';

/**
 * Статичные проверки на режим запуска приложения.
 */
const runtimeMode = {
  isDev,
  isTest,
  isDebug,
  isProd,
} as const;

export default runtimeMode;
