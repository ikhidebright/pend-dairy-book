<template>
  <v-app>
    <v-content>
    <Loader />
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
import Loader from '@/components/Loader.vue'

export default {
  name: 'App',

  components: {
    Loader
  },

  data: () => ({
    //
  }),
};
</script>

<style>

a {
    color: #ffffff;
    text-decoration: none
}
</style>
