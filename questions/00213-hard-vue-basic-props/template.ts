type Constructor<C> =
  C extends { (...args: any): infer T } ? T :
    C extends { new(): infer T } ? T :
      C extends (infer T)[] ? Constructor<T> : C
type PropType<P> = {} extends P ? any : Constructor<P>
type Props<P> = { [K in keyof P]: P[K] extends { type: infer T } ? PropType<T> : PropType<P[K]> }
type Computed2<C> = { [K in keyof C]: C[K] extends () => infer R ? R : never }
type Options2<P, D, C, M> = {
  props: P
  data(this: Props<P>): D
  computed: C
  methods: M
} & ThisType<M & D & Computed2<C> & Props<P>>
declare function VueBasicProps<P, D, C, M>(options: Options2<P, D, C, M>): any
declare function alert(...args: any): any
