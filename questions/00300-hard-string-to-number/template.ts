type ToNumber<S extends string, T extends Array<any> = []> = S extends `${T['length']}`
  ? T['length']
  : ToNumber<S, [...T, any]>
