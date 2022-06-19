type _Diff<O, O1> =
  { [K in Exclude<keyof (O & O1), keyof O>]: O1[K] } &
  { [K in Exclude<keyof (O & O1), keyof O1>]: O[K] }
type Diff<O, O1, D = _Diff<O, O1>> = { [K in keyof D]: D[K] }
