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
  import { reactive } from 'vue'
  
  export default {
    setup() {
      const name = 'Jhon Jep'
      
      const user = reactive({
        firts_name:'Jhon',
        last_name:'Jep'
      })

      const changeLastName = ()=>{
        user.last_name = 'new last name'
      }
      return {
        name,
        user,
        changeLastName
      }
    }
  }
</script>
