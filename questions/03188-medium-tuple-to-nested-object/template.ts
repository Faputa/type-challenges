type TupleToNestedObject<T, U> = T extends [infer A, ...infer B]
  ? A extends string ? { [K in A]: TupleToNestedObject<B, U> } : never
  : U
