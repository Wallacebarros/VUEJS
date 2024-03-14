<template>
  <BaseAlert variant="success">
    Seu e-mail foi enviado
  </BaseAlert>
</template>

<script>
  import BaseAlert from './components/BaseAlert.vue'

  export default {   
    name:'App',
    components:{
      BaseAlert
    }
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
