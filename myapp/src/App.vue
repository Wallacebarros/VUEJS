<template>
  <div>
    <button @click="click()">
      enviar
    </button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {

    }
  },
  methods: {
    click() {
      window.alert("teste")
    }
  },
}
</script>

<style>
#app {
  margin: 0px;
  padding: 0px;
}
</style>
