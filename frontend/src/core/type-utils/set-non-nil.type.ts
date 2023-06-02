import type { SetNonNullable, SetRequired } from 'type-fest';

export type SetNonNil<BaseType, Keys extends keyof BaseType = keyof BaseType> = SetNonNullable<SetRequired<BaseType, Keys>, Keys>;
