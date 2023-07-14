/* eslint-disable @typescript-eslint/no-explicit-any */
import { omit } from 'lodash';

/**
 * Строго типизированный lodash.omit
 */
export function strictOmit<T extends object, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
  return omit(obj, keys);
}

/**
 * Строго типизированный lodash.omit.
 * Вторым параметром можно передавать ключи не относящиеся к объекту в первом параметре.
 */
export function strictMediumOmit<T extends object, K extends keyof T>(obj: T, ...keys: (K | string)[]): Omit<T, K> {
  return omit(obj, keys) as any;
}
