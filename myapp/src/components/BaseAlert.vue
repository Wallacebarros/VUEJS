<template>
  <span :class="`alert ${getVariant}`">
    <slot/>
  </span>
</template>

<script>
  export default {
    props:['variant'],
    computed: {
      getVariant() {
        return this.variant ? `alert--${this.variant}` : '';
      }
    },
  }
</script>

<style>
  .alert {
    padding: 6px;
    border-radius: 6px;
    background-color: #ddd;
  }
  .alert--success {
    background-color: #42b983;
    color: #fff;
  }
  .alert--failed {
    background-color: red;
    color: #fff;
  }
</style>
