type Currying<P, R> = P extends [infer A, ...infer B] ? (a: A) => Currying<B, R> : R
declare function Currying<F>(fn: F): F extends (...args: infer P) => infer R ? Currying<P, R> : never
