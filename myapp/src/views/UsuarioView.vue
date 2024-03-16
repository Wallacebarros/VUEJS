<template>
  <div>
    nome: {{$store.state.user.first_name}} <br/>
    sobrenome: {{$store.state.user.last_name}}
  </div>
</template>

<script>
  export default {
    created() {
      const newUser = {
        first_name: 'jihn',
        last_name: 'iden'
      }
      this.$store.commit('alterar',newUser)
    }
  }
</script>
