<template>
  <div>
    <label for="userName">Nome:</label>
    <input type="text" v-model="name">
    <p>{{name}}</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      name:"jon jep"
    }
  }
}
</script>

<style>
#app {
  margin: 0px;
  padding: 0px;
}
</style>
