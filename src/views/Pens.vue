<template>
  <div class="about">
  <Head />
  <br>
  <Pen />
  <Pen />
  <Pen />
  </div>
</template>

<script>
// @ is an alias to /src
import Head from '@/components/Head.vue'
import Pen from '@/components/Pen.vue'

export default {
  name: 'Home',
  components: {
   Head,
   Pen
  }
}
</script>

<style scoped>
</style>
