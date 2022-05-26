// https://github.com/type-challenges/type-challenges/issues/9052
// type OmitUnion<T, K> = T extends K ? never : T
// type EmptyObject<T> = keyof T extends keyof {} ? true : false
// type Chainable<T extends {} = {}> = {
//   option<K extends
//   EmptyObject<T> extends true
//     ? string
//     : OmitUnion<keyof T, K> extends true
//       ? never
//       : string
//   , V>(key: K, value: V): Chainable<T & { [k in K]: V }>
//   get(): T
// }
type Chainable<T extends {} = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<T & { [N in K]: V }>
  get(): T
}
