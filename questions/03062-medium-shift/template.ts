type Shift<T extends any[]> = T extends [infer _, ...infer B] ? B : T
