// type UppercaseFirst<S extends string> = S extends `${infer H}${infer T}` ? `${Uppercase<H>}${Lowercase<T>}` : `${Uppercase<S>}`
// type UpperCamelCase<S extends string> = S extends `${infer H}_${infer T}` ? `${UpperCamelCase<H>}${UpperCamelCase<T>}` : `${UppercaseFirst<S>}`
// type CamelCase<S extends string> = S extends `${infer H}_${infer T}` ? `${Lowercase<H>}${UpperCamelCase<T>}` : Lowercase<S>
type CamelCase<S extends string> = S extends `${infer H}_${infer T}` ? `${Lowercase<H>}${Capitalize<CamelCase<T>>}` : Lowercase<S>
