<template>
    <div class="{{name}}">

    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'


export default {
  name: '{{filePath|fullName|camelCase}}',

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