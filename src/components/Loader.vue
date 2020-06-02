<template>
  <div class="text-center">
    <!--<v-btn
      color="deep-purple accent-4"
      class="white--text"
      @click="overlay = !overlay"
    >
      Launch Application
      <v-icon right>mdi-open-in-new</v-icon>
    </v-btn>-->
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

  export default {
    name: 'Loader',
    data: () => ({
    }),
    methods: {
        ...mapActions(['Loader'])
    },
    watch: {
      overlay (val) {
        val && setTimeout(() => {
          this.Loader(false)
        }, 3000)
      },
    },
    computed: mapState({
        overlay: 'overlay'
    })
  }
</script>