import type { PartialDeep } from 'type-fest';
import { merge } from 'lodash';

function strictMerge<T extends object, U extends PartialDeep<T>>(obj1: T, obj2: U): T & U {
  return merge(obj1, obj2);
}

export default strictMerge;
