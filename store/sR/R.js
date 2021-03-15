import { makeCrudModule } from '~/mixins/Generator/MixinStore'
const { state, actions, getters, mutations } = makeCrudModule({
  namespace: 'R'
})

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions

}
