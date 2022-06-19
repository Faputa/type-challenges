type LengthOfString<S extends string, N extends Array<string> = []> = S extends `${infer A}${infer B}${infer C}${infer D}${infer E}${infer F}${infer G}${infer H}${infer I}${infer J}${infer K}`
  ? LengthOfString<K, [...N, A, B, C, D, E, F, G, H, I, J]>
  : S extends `${infer A}${infer B}` ? LengthOfString<B, [...N, A]> : N['length']
