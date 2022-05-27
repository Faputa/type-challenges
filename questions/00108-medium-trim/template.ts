type _Blank = ' ' | '\n' | '\t'
type Trim<S extends string> = S extends `${_Blank}${infer T}`
  ? Trim<T>
  : S extends `${infer T}${_Blank}`
    ? Trim<T>
    : S
