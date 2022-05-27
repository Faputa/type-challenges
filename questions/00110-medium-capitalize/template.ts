type MyCapitalize<S extends string> = S extends `${infer H}${infer T}` ? `${Uppercase<H>}${T}` : ''
