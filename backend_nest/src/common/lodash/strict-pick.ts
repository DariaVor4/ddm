import { pick } from 'lodash';
import type { Simplify } from 'type-fest';

/**
 * Строго типизированный lodash.pick
 */
export function strictPick<T, K extends keyof NonNullable<T>>(obj: T, ...keys: K[]) {
  return pick(obj, keys) as Simplify<Pick<NonNullable<T>, K>>;
}

/**
 * Строго типизированный lodash.pick.
 * Вторым параметром можно передавать ключи не относящиеся к объекту в первом параметре.
 */
export function extractPick<T, K extends (keyof NonNullable<T>) | string>(obj: T, ...keys: (K)[]) {
  return pick(obj, keys) as Simplify<Pick<NonNullable<T>, Extract<K, keyof NonNullable<T>>>>;
}
