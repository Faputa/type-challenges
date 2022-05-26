type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [N in K]: T[N]
} & {
  [N in Exclude<keyof T, K>]: T[N]
}
