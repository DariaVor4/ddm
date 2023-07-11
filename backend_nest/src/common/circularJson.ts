/* eslint-disable @typescript-eslint/no-explicit-any,consistent-return */

/**
 * Вспомогательный метод для JsonCircular
 */
const circularJson = () => {
  const seen = new WeakSet();
  return (key: any, value: any) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

/**
 * Метод для отладки, помогает определить слабо-типизированные объекты библиотек.
 */
export const JsonCircular = (data: any, spaces?: number) => JSON.stringify(data, circularJson(), spaces);
