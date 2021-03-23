# vuetcher (for nuxtjs)

### package for auto generating vue components, modules, services, pages.

Install

    npm  i  vuetcher

or

yarn add vuetcher

Add to package.json file

    {
    	"scripts":{
    		"dev": "nuxt & vuetcher"
    		}
    	}

(&& - run commands async, & - run commands parallel )

**And run your application**
yarn dev

or

    npm run dev

---

#### How does it work

Just create new folder in directory you wish generate files while you are running "dev" script.

Two options of type folder:

- s - single
- f- full.

![Naming](/assets/naming.png)
![Examples](/assets/example.png)

<!-- ![caption](../assets/components_example.movie.gif) -->

### components

#### Single (s)

    <template>
    	<div class="{{name}}">

    	</div>
    </template>

    <script>
    import { mapActions, mapGetters } from 'vuex'


    export default {
    name: {{name}},

    data(){
    	return{

    	}
    },

    computed:{

    },

    mounted(){

    }
    }
    </script>


    <style lang="scss" module>
    .{{name}}{
    color: initial;
    background: initial;
    }
    </style>

#### Full (f)

index.js

    <template>
    </template>

    <script src="./{{name}}.js"></script>


    <style lang="scss" module>
    @import './style;
    </style>

script.js

    import { mapActions, mapGetters } from 'vuex'


    export default {
    name: {{name}},

    data () {
    	return{

    	}
    },

    mounted () {

    },


    computed: {

    },

    watch: {

    },
    }

style.scss

    .{{name}}{
    	color: initial;
    	background: initial;
    }

---

### pages

#### Single (s)

    <template>
    	<div class="{{name}}">

    	</div>
    </template>

    <script>
    import { mapActions, mapGetters } from 'vuex'


    export default {
    name: {{name}},

    data(){
    	return{

    	}
    },

    computed:{

    },

    mounted(){

    }
    }
    </script>


    <style lang="scss" module>
    .{{name}}{
    color: initial;
    background: initial;
    }
    </style>

---

### services

#### Single (s)

    import Api from './Api'

    export default {
    	get{{name}}(){
    		return Api.get()
    	}
    }

---

### store

#### Single (s)

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

#### Full (f)

index.js

    import \* as {{name}}Actions from './actions';
    import {{name}}Mutations from './mutations ';

    const {{name}}Getters = {

    }

    const {{name}}State = () => ({

    })

    export default {
    namespace: true,
    state: {{name}}State,
    getters: {{name}}Getters ,
    actions: {{name}}Actions,
    mutations: {{name}}Mutations
    };

actions.js

    import * as {{name}}Types from './mutation_types.js';
    import * as types from '~/mixins/Generator/mixinStore/mutation_types.js';
    import {{name}}Services from '~/services/{{name}}Services'

    export const FAN = ({commit}) =>  {

    try{

    } catch{

    }
    };

mutations.js

    import \* as types from './mutation_types'

    export default {

    }

---

---

---

---

---

todo:

1. rewrite on ts
2. vue3 components
3. improve alerts

Thank you, will glad to help you

# **RESPECT**

- https://www.freecodecamp.org/news/how-to-create-files-automatically-and-save-time-with-magic-scaffolding-8dcd1b31483/ \*
- https://www.npmjs.com/package/vue-generate-component \*
