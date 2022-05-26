type First<T extends any[]> = T extends [infer H, ...any] ? H : never
