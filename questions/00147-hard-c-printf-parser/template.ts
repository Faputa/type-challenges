type ControlsMap = {
  c: 'char'
  s: 'string'
  d: 'dec'
  o: 'oct'
  h: 'hex'
  f: 'float'
  p: 'pointer'
}

type ParsePrintFormat<S extends string, C extends string[] = []> = S extends `${infer _}%${infer A}${infer B}`
  ? ParsePrintFormat<B, A extends keyof ControlsMap ? [...C, ControlsMap[A]] : C>
  : C
