type TupleToUnion<T> = T extends Array<infer K> ? K : never
