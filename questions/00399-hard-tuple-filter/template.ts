type FilterOut<T extends any[], F> = T extends [infer A, ...infer B]
  ? [A] extends [F] ? FilterOut<B, F> : [A, ...FilterOut<B, F>]
  : T
