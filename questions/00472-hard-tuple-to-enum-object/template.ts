type _IndexOf<T, U, V extends any[] = []> = T extends readonly [infer A, ...infer B]
  ? U extends A ? V['length'] : IndexOf<B, U, [...V, A]>
  : -1
type Enum<T extends readonly string[], N extends boolean = false> = {
  readonly [K in T[number]as Capitalize<K>]: N extends true ? _IndexOf<T, K> : K
}
