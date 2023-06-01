import type { PartialDeep } from 'type-fest';
import { merge } from 'lodash';

export function strictMerge<T extends object, U extends PartialDeep<T>>(obj1: T, obj2: U): T & U {
  return merge(obj1, obj2);
}
