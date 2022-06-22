type FlattenDepth<T, U = 1, V extends any[] = []> = U extends V['length'] ? T
  : T extends [infer A, ...infer B]
    ? A extends any[]
      ? [...FlattenDepth<A, U, [...V, 1]>, ...FlattenDepth<B, U, V>]
      : [A, ...FlattenDepth<B, U, V>]
    : []
