<template>
  <div class="homeM">
  <HomeCards />
  <HomeAction />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeCards from '@/components/HomeCards.vue'
import HomeAction from '@/components/HomeAction.vue'

export default {
  name: 'Home',
  components: {
    HomeCards,
    HomeAction
  }
}
</script>

<style scoped>
.homeM {
  min-height: 100vh;
  max-height: auto;
  background-color: #B71C1CFF;
}
</style>
