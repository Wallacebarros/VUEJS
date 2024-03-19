<template>
  <h1>Produtos</h1> 
    <AppProduct 
      v-for="product in $store.state.products" 
      :key="product.id"
      :product="product"
    />
  <h1>Carinho de compras</h1>
  <p>preço total: {{ $store.getters.totalPrice }}</p>
    <AppCart
      v-for="product in $store.state.cart"
      :key="product.id"
      :product="product"
    />
</template>

<script>
  import AppProduct from './AppProduct.vue'
  import AppCart from './AppCart.vue'
  export default {
    components: {
      AppProduct,
      AppCart
    },
  }
</script>
