<template>
  <div>
    {{product.name}} - {{product.price}} |
    <button @click='clickAdd'>adicionar ao carinho</button>
  </div>
</template>

<script>
  export default {
    props: {
      product: Object
    },
    methods: {
      clickAdd() {
        this.$store.commit('addCart', this.product)
        this.$store.commit('rmProducts', this.product)
      }
    },
  }
</script>
