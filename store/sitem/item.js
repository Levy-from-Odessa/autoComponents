import { makeCrudModule } from '~/mixins/Generator/MixinStore'
const { state, actions, getters, mutations } = makeCrudModule({
  namespace: 'item'
})

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions

}
