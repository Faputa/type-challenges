type GetRequired<T> = {
  [K in keyof T as Omit<T, K> extends T ? never : K]: T[K]
}
