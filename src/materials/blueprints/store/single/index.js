import { makeCrudModule } from '~/mixins/Generator/MixinStore'
const { state, actions, getters, mutations } = makeCrudModule({
  namespace: '{{name}}'
})

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions

}
