import { Cache } from '@apollo/client';

export type CacheFieldsOfType<T> = Partial<Record<keyof T, Cache.ModifyOptions['fields']>>;
