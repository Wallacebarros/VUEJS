<template>
  <p>fixed variable: {{ name }}</p>
  <br/>
  <h3>reactive variables</h3>
  <p>{{ user.firts_name }} {{ user.last_name}}</p>

  <button @click='changeLastName'>
    change last name
  </button>
</template>
<script>
  import { ref } from 'vue'
  
  export default {
    setup() {
      const name = 'Jhon Jep'
      
      const user = ref({
        firts_name:'Jhon',
        last_name:'Jep'
      })

      const changeLastName = ()=>{
        user.value.last_name = 'new last name'
      }
      return {
        name,
        user,
        changeLastName
      }
    }
  }
</script>
