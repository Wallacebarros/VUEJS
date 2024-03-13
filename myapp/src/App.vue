<template>
  <input type="text" v-model="name">
  <p>{{name}}</p>

</template>
<script>

  export default {   
    name:'App',
    data() {
      return {
        name:""
      }
    },
    watch:{
      name() {
        this.pushApi()
      }
    },
    methods: {
      pushApi(){
        console.log("fetch")
      }
    },
  }
</script>
<style>
  body{ 
    margin: 0px;
  }
</style>
