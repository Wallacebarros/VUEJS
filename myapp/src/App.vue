<template>
  <div v-for="obj in data" v-bind:key="obj.id">
    teste {{obj.id}}
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  },
  data() {
    return{
      data: [
        {
          "id":1
        },
        {
          "id":2
        },
        {
          "id":3
        }
      ]
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
