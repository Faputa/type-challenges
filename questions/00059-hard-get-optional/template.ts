type GetOptional<T> = {
  [K in keyof T as Omit<T, K> extends T ? K : never]: T[K]
}
