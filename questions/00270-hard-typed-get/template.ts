type _Get<T, K> = K extends keyof T ? T[K] : never
type Get<T, K> = K extends `${infer A}.${infer B}` ? Get<_Get<T, A>, B> : _Get<T, K>
