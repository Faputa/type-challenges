type CapitalizeWords<S extends string, L extends string = ''> = S extends `${infer A}${infer B}`
  ? Lowercase<L> extends Uppercase<L> ? `${Uppercase<A>}${CapitalizeWords<B, A>}` : `${A}${CapitalizeWords<B, A>}`
  : S
