// 魔法类型ThisType
type Computed<C> = { [K in keyof C]: C[K] extends () => infer R ? R : never }
type Options<D, C, M> = {
  data(): D
  computed: C & ThisType<M & D & Computed<C>>
  methods: M & ThisType<M & D & Computed<C>>
} & ThisType<never>
declare function SimpleVue<D, C, M>(options: Options<D, C, M>): any
declare function alert(arg: any): any
