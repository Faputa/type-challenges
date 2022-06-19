type _KebabCase<S extends string> = S extends `${infer A}${infer B}` ? A extends Lowercase<A> ? `${A}${_KebabCase<B>}` : `-${Lowercase<A>}${_KebabCase<B>}` : S
type KebabCase<S extends string> = _KebabCase<S extends `${infer A}${infer B}` ? `${Lowercase<A>}${B}` : S>
