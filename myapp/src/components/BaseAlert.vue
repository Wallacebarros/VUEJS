<template>
  <span :class="`alert ${getVariant}`">
    <slot/>
    <button @click="onClick()">
      X
    </button>
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
    methods: {
      onClick(){
        this.$emit('delite')
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
  button {
    padding: 2px 6px;
    background-color: transparent;
    border: 1px solid #fff;
    border-radius: 6px;
    color: #fff;
  }
</style>
