import { entries } from 'lodash';

/**
 * Строго типизированный lodash.entries
 */
export const strictEntries = <T extends object, K extends keyof T>(obj: T) => entries(obj) as [K, T[K]][];
