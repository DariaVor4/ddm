// TypeScript 4.1 deep keys extraction type
// combination of https://flut1.medium.com/deep-flatten-typescript-types-with-finite-recursion-cb79233d93ca
//  and https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/#key-remapping-in-mapped-types

type KeysPrependRecursor<T, P extends string> = {
  [K in keyof T as `${P}.${string & K}`]: T[K] extends Object ? KeysPrependRecursor<T[K], `${P}.${string & K}`> : T[K]
};
type KeysPrepend<T> = {
  [K in keyof T]: T[K] extends Object ? KeysPrependRecursor<T[K], `${string & K}`> : T[K]
};
type UnionToIntersection<U> = (U extends any
  ? (k: U) => void
  : never) extends ((k: infer I) => void)
  ? I
  : never;

type ValuesOf<T> = T[keyof T];
type ObjectValuesOf<T> = Exclude<
Extract<ValuesOf<T>, object>,
Array<any>
>;

type Flatten<T> = T & UnionToIntersection<ObjectValuesOf<T>>;

type DeepFlatten<T> = T extends any
  ? T & UnionToIntersection<DeepFlatten2<ObjectValuesOf<T>>>
  : never;

type DeepFlatten2<T> = T extends any
  ? T & UnionToIntersection<DeepFlatten3<ObjectValuesOf<T>>>
  : never;

type DeepFlatten3<T> = T extends any
  ? T & UnionToIntersection<DeepFlatten4<ObjectValuesOf<T>>>
  : never;

type DeepFlatten4<T> = T extends any
  ? T & UnionToIntersection<DeepFlatten5<ObjectValuesOf<T>>>
  : never;

type DeepFlatten5<T> = T extends any
  ? T & UnionToIntersection<DeepFlatten6<ObjectValuesOf<T>>>
  : never;

type DeepFlatten6<T> = T extends any
  ? T & UnionToIntersection<DeepFlatten7<ObjectValuesOf<T>>>
  : never;

type DeepFlatten7<T> = T extends any
  ? T & UnionToIntersection<DeepFlatten8<ObjectValuesOf<T>>>
  : never;

type DeepFlatten8<T> = T extends any
  ? T & UnionToIntersection<Flatten<ObjectValuesOf<T>>>
  : never;

export type DeepKeys<T> = keyof DeepFlatten<KeysPrepend<T>>;

// example

// interface A {
//   foo: string;
//   bar: number
// }
//
// interface A1 {
//   foos: string;
//   bars: number;
//   s: A;
// }
//
// interface B {
//   sub: A;
//   sub1: A1;
//   foo: string;
// }
//
// const s: DeepKeys<B> = 'sub1.s.bar';
