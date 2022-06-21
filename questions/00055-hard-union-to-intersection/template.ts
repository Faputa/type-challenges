// tip函数参数逆变
type UnionToIntersection<U> = (U extends any ? (a: U) => any : never) extends ((a: infer T) => any) ? T : never
