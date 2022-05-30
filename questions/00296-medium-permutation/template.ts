// https://stackoverflow.com/questions/53984650/typescript-never-type-inconsistently-matched-in-conditional-type
type Permutation<T, K = T> = [T] extends [never]
  ? []
  : T extends any
    ? [T, ...Permutation<Exclude<K, T>>]
    : never
