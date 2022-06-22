type TupleToNestedObject<T, U> = T extends [infer A, ...infer B]
  ? { [K in A & string]: TupleToNestedObject<B, U> }
  : U
