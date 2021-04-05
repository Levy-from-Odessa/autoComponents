
import { makeCrudModule } from '~/mixins/Generator/MixinStore'
const { state, actions, getters, mutations } = makeCrudModule({
  namespace: '{{name}}'
})


import * as {{name|camelCase}}Actions from './actions';
import {{name|camelCase}}Mutations from './mutations ';

const {{name|camelCase}}Getters = {

}

const {{name|camelCase}}State = () => ({

})

export default {
  namespace: true,
  state:() => {
    ...{{name|camelCase}}State(),
    ...state()
  },
  getters:{
    ...{{name|camelCase}}Getters,
    ...getters
  }
  actions: {
    ...{{name|camelCase}}Actions,
    ...actions
  }
  mutations:{ 
   ...{{name|camelCase}}Mutations,
   ...mutations
  }
    
};
