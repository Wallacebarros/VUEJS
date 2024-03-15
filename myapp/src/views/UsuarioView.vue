<template>
  <div>
    nome: {{user}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        user: this.$store.state.user.fist_name
      }
    }
  }
</script>
