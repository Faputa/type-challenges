type RequiredKeys<T, K extends keyof T = keyof T> = K extends any ? Omit<T, K> extends T ? never : K : never
