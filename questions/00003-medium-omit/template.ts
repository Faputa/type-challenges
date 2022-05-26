type MyOmit<T, K extends keyof T> = {
  [N in Exclude<keyof T, K>]: T[N]
}
