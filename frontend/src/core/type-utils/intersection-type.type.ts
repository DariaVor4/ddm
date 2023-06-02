export type IntersectionType<TypeA, TypeB> = Pick<TypeA & TypeB, {
  [K in keyof (TypeA & TypeB)]: K extends keyof TypeA & keyof TypeB
    ? TypeA[K] extends TypeB[K] ? K : never
    : never
}[keyof (TypeA & TypeB)]>;
