import { pick } from 'lodash';
import type { Simplify } from 'type-fest';

const strictPick = <T, K extends keyof T>(obj: T, keys: K[]) => pick(obj, keys) as Simplify<Pick<T, K>>;

export default strictPick;
