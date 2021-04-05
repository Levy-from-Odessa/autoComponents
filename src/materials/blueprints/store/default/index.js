


import * as {{name|camelCase}}Actions from './actions';
import {{name|camelCase}}Mutations from './mutations ';

const {{name|camelCase}}Getters = {

}

const {{name|camelCase}}State = () => ({

})

export default {
  namespace: true,
  state:() => {
    ...state()
  },
  getters:{
    ...getters
  }
  actions: {
    ...actions
  }
  mutations:{ 
   ...mutations
  }
    
};
