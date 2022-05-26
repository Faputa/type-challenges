type DeepReadonly<T> = T extends (...args: any[]) => any
  ? T
  : T extends {}
    ? {
        readonly [K in keyof T]: DeepReadonly<T[K]>
      }
    : T
