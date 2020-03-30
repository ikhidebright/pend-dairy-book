<template>
  <div class="home">
  <HomeCards />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeCards from '@/components/HomeCards.vue'

export default {
  name: 'Home',
  components: {
    HomeCards
  }
}
</script>
