<template>
  <BaseAlert 
    variant="success" 
    @delite="deliteFunc()"
    v-if="showAlert"
  >
    Seu e-mail foi enviado
  </BaseAlert>
</template>

<script>
  import BaseAlert from './components/BaseAlert.vue'

  export default {   
    name:'App',
    data() {
      return {
        showAlert:true
      }
    },
    components:{
      BaseAlert
    },
    methods: {
      deliteFunc(){
        return this.showAlert = false
      }
    },
  }
</script>

<style>
  body{ 
    margin: 0px;
  }
  #app {
    margin-left: 30px;
    margin-top: 30px;
  }
</style>
