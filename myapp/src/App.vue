<template>
  <p>{{fullName}}</p>
</template>
<script>

  export default {   
    name: 'App',
    data() {
      return {
        firstName:"Jonh",
        lastName:"Jep"
      }
    },
    computed: {
      fullName() {
        return `${this.firstName} ${this.lastName}`
      }
    }
  }
</script>
<style>
  body{ 
    margin: 0px;
  }
</style>
