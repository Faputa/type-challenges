// type hh<T> = T extends [infer A, ...infer B] ? [A extends Promise<infer V> ? V : A, ...hh<B>] : []
// declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<hh<T>>
declare function PromiseAll<T extends any[]>(values: readonly [...T]): Promise<{ [K in keyof T]: T[K] extends Promise<infer V> ? V : T[K] }>
