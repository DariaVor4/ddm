type PickNullable<T> = {
  [P in keyof T as null extends T[P] ? P : never]: T[P]
};

type PickNotNullable<T> = {
  [P in keyof T as null extends T[P] ? never : P]: T[P]
};

export type OptionalNullable<T> = {
  [K in keyof PickNullable<T>]?: T[K]
} & {
  [K in keyof PickNotNullable<T>]: T[K]
};

export type AllTrue<T> = T extends object ? { [K in keyof T]: AllTrue<T[K]> } : true;
