import { FieldPolicy, FieldReadFunction } from '@apollo/client';

export type TypePoliciesOfFieldsType<T> = Partial<Record<keyof T, FieldPolicy | FieldReadFunction>>;
