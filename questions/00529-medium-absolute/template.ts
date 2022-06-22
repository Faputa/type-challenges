type Absolute<T extends number | string | bigint, S = `${T}`> = S extends `-${infer A}` ? A : S
