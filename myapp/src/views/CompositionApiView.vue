<template>
  <p>fixed variable: {{ name }}</p>
  <br/>
  <h3>reactive variables</h3>
  <p>{{ user.firts_name }} {{ user.last_name}}</p>
  <button @click='changeLastName'>
    change last name
  </button>
  <h3>computed in coposition api</h3>
  {{ fullName }}

</template>
<script>
  import { ref, computed, watch } from 'vue'
  
  export default {
    setup() {
      const name = 'Jhon Jep'
      
      const user = ref({
        firts_name:'Jhon',
        last_name:'Jep'
      })

      const fullName = computed(()=>{
        return `${user.value.firts_name} ${user.value.last_name}`
      })

      watch( ()=>user.value.last_name, ()=>{
        console.log('altered')
      })

      const changeLastName = ()=>{
        user.value.last_name = 'new last name'
      }
      return {
        name,
        user,
        changeLastName,
        fullName
      }
    }
  }
</script>
