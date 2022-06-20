type AnyOf<T extends readonly any[]> = T extends [infer A, ...infer B]
  ? A extends 0 | '' | false | [] | Record<string, never> ? AnyOf<B> : true
  : false
