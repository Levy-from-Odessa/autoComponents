const templates = {
    full: {
        index: name => ({
            file: 'index.vue',
            content:  
            `
// Html
<template>

</template>

// Script 
<script src="./${name}.js"></script>


// Styles
<style lang="scss" module>
@import './style;
</style>
    `,
        }),
        js: name => ({
            file: `${name}.js`,
            content: 
    `
import { mapActions, mapGetters } from 'vuex


export default{
  name: ${name},
  data(){
    return{

    }
  },

  methods:{

  },

  computed:{

  },

  mounted(){

  }
}
    `,
        }),

        scss: name => ({
            file: `${name}.scss`,
            content: 
    `
.${name.toLowerCase()}{
  color: initial;
  background: initial;
}
    `
        })

    },

    single: {
        index: name => ({
            file: 'index.vue',
            content: 
`
<template>
    <div>
    </div>
</template

<script>
import { mapGetters, mapActions } from 'vuex'
export default{
    name: '${name}'
    data(){
        return{

        }
    },

    methods:{

    }

    computed: {

    }

    mounted(){

    }
}

</script>


`
        })

    }
}
module.exports = templates