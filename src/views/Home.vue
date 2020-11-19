<template>
  <div class="home">
    <h1>Characters</h1>
    <Card msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Card from '@/components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  }
}
</script>
