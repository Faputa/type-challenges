type Last<T extends any[]> = T extends [...any, infer H] ? H : never
