<template>
  <v-bottom-navigation
    v-model="bottomNav"
    dark
    fixed
    bottom
    shift
    :value="activeBtn"
    color="red lighten-1"
  >
    <v-btn>
      <span>Pens</span>
      <v-icon>mdi-book-open-page-variant</v-icon>
    </v-btn>

    <v-btn>
      <span>Favorite</span>
      <v-icon>mdi-heart</v-icon>
    </v-btn>

    <v-btn to="/pad">
      <span>Add Pen</span>
      <v-icon>mdi-book-plus</v-icon>
    </v-btn>

    <v-btn>
      <span>Account</span>
      <v-icon>mdi-face</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    data () {
      return {
        bottomNav: 3,
        activeBtn: 1,
      }
    },

    computed: {
      color () {
        switch (this.bottomNav) {
          case 0: return 'blue-grey'
          case 1: return 'teal'
          case 2: return 'brown'
          case 3: return 'indigo'
        }
      },
    },
  }
</script>