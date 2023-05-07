import { omit } from 'lodash';

const strictOmit = <T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> => omit(obj, keys);

export default strictOmit;
