// 魔法类型ThisType
type Computed<C> = { [K in keyof C]: C[K] extends () => infer R ? R : never }
type Options<D, C, M> = {
  data(this: {}): D
  computed: C
  methods: M
} & ThisType<M & D & Computed<C>>
declare function SimpleVue<D, C, M>(options: Options<D, C, M>): any
declare function alert(arg: any): any
