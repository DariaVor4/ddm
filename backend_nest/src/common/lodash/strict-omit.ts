import { omit } from 'lodash';

export function strictOmit<T extends object, K extends keyof T>(obj: T, ...keys: K[]): Omit<T, K> {
  return omit(obj, ...keys);
}
