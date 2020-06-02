<template>
<div class="card">
    <v-window v-model="onboarding">
      <v-window-item
      >
        <v-card
          color="transparent"
          flat
          dark
          class="pt-12"
        >
        <v-container class="mt-12">
          <v-row
            no-gutters
            class="fill-height mt-5"
            justify="center"
          >
          <div class="mt-12">
            <h2 class='logo mt-12'>Pend</h2>
          </div>
          </v-row>
            </v-container>
        </v-card>
      </v-window-item>

      <v-window-item
      >
        <v-card
          color="transparent"
          flat
          dark
          class="pt-12"
        >
        <v-container>
          <v-row
            no-gutters
            class="fill-height mt-12"
          >
          <img :src="require('@/assets/pic.jpg')" class="img"/>
            <h2 class='head'>Your Private Journals</h2>
            <p> Create & customize journals for everything in your life</p>
            </v-row>
            </v-container>
        </v-card>
      </v-window-item>
      <v-window-item
      >
        <v-card
          color="transparent"
          flat
          dark
          class="pt-12"
        >
        <v-container>
          <v-row
            no-gutters
            class="fill-height mt-12"
          >
          <img :src="require('@/assets/pic.jpg')" class="img"/>
            <h2 class='head'>Rich Entries</h2>
            <p> Add photos and choose fonts to make your journals your own </p>
            </v-row>
            </v-container>
        </v-card>
      </v-window-item>
    </v-window>  
  </div>
</template>

<script>

  export default {
    data: () => ({
      length: 3,
      onboarding: 0,
      autorun: true
    }),

    created () {
      setInterval(() => {
        if (!this.autorun) return
        if (++this.onboarding >= this.length) this.onboarding = 0
      }, 4000)
    },

    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
    },
    components: {
    }
  }
</script>

<style scoped>

.bigLogo {
  margin-top: 10vh;
}

.card {
  min-height: 90vh;
  max-height: auto;
  color: white
}

.home {
  height: 92vh;
}

.img {
  width: 70%
}

.head {
    font-family: 'Fredoka One';
    font-size: 2rem
}

.logo {
    font-family: 'Pacifico'; 
    font-size: 8rem;
    margin-top: 10% !important;
}

p {
    font-family: 'Roboto';
    font-size: 1rem;
}

.gr {
  text-align: center
}
</style>