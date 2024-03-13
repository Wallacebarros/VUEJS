<template>
  <MyHeader>
    <template v-slot:title>
      <h1>titulo</h1>
    </template>
    <h1>Home</h1>
    <p>paragrafo</p>
  </MyHeader>
</template>

<script>
  import MyHeader from './components/MyHeader.vue'

  export default {   
    name:'App',
    components:{ MyHeader }
  }
</script>

<style>
  body{ 
    margin: 0px;
  }
</style>
