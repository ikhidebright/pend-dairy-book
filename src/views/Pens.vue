<template>
  <div class="pens">
  <Head />
  <Pen />
  <Pen />
  <Pen />
  <FooterPens />
  </div>
</template>

<script>
// @ is an alias to /src
import Head from '@/components/Head.vue'
import Pen from '@/components/Pen.vue'
import FooterPens from '@/components/FooterPens.vue'

export default {
  name: 'Home',
  components: {
   Head,
   Pen,
   FooterPens
  }
}
</script>

<style scoped>
.pens {
  background: rgb(241,241,241);
  background: linear-gradient(35deg, rgba(241,241,241,1) 49%, rgba(210,210,210,1) 49%);
  min-height: 100vh;
  max-height: auto;
}
</style>
