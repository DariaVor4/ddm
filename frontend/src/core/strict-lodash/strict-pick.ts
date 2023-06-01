import { pick } from 'lodash';
import type { Simplify } from 'type-fest';

export function strictPick<T, K extends keyof T>(obj: T, keys: K[]) {
  return pick(obj, keys) as Simplify<Pick<T, K>>;
}
