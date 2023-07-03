import { cloneDeep, merge } from 'lodash';

export const strictCopyMerge = <T, S>(target: T, source: S): T & S => merge(cloneDeep(target), source);
