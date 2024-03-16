<template>
  <div>
    {{product.name}} | <button @click="clickRm()">remover do carrinho</button>
  </div>
</template>

<script>
  export default {
    props:{ product: Object },
    methods: {
      clickRm() {
        this.$store.commit('rmCart', this.product)
        this.$store.commit('addProducts', this.product)
      }
    },
  }
</script>
