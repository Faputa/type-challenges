type IndexOf<T, U, V extends any[] = []> = T extends [infer A, ...infer B]
  ? Equal<U, A> extends true ? V['length'] : IndexOf<B, U, [...V, A]>
  : -1
