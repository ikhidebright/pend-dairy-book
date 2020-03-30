<template>
  <div class="about">
  <Head />
  </div>
</template>

<script>
// @ is an alias to /src
import Head from '@/components/Head.vue'

export default {
  name: 'Home',
  components: {
   Head
  }
}
</script>


<style scoped>
.about {
  background-color: #f1f1f1
}
</style>
