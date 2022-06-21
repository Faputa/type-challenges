type Getters<G> = { readonly [K in keyof G]: G[K] extends () => infer T ? T : never }
declare function defineStore<S, G, A>(store: {
  id: string
  state(): S
  getters: G & ThisType<Readonly<S> & Getters<G>>
  actions: A & ThisType<S & Getters<G> & A>
}): S & Getters<G> & A
