type AppendToObject<T, U extends string, V, X = T & { [I in U]: V }> = { [K in keyof X]: X[K] }
