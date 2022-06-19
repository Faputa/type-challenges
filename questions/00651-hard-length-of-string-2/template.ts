type LengthOfString<S extends string, A extends Array<string> = []> = S extends `${infer H}${infer T}`
  ? LengthOfString<T, [...A, H]>
  : A['length']
