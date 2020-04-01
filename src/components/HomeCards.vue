<template>
  <v-card
    color="#B71C1CFF"
    dark
    flat
    tile
  >
    <v-window v-model="onboarding">
      <v-window-item
      >
        <v-card
          color="transparent"
          height="547"
          flat
        >
        <v-container>
          <v-row
            no-gutters
            class="fill-height mt-12"
            align="center"
            justify="center"
            tag="v-card-text" 
          >
          <v-col
          class="mt-12"
          sm="3"
          md="3"
          >
         <!--   <p class='gr'>Welcome to</p> -->
            <h2 class='logo mt-12'>Pend</h2>
            </v-col>
            </v-row>
            </v-container>
        </v-card>
      </v-window-item>

      <v-window-item
      >
        <v-card
          color="transparent"
          height="547"
          flat
        >
        <v-container>
          <v-row
            no-gutters
            class="fill-height mt-12"
            align="center"
            justify="center"
            tag="v-card-text" 
          >
          <v-col
          class="mt-9"
          sm="3"
          md="4"
          >
          <img :src="require('@/assets/pic.jpg')"/>
          </v-col>
          <v-col
          class="mt-9"
          sm="3"
          md="6"
          >
            <h2 class='head'>Your Private Journals</h2>

            <p> Create & customize journals for everything in your life</p>
            </v-col>
            </v-row>
            </v-container>
        </v-card>
      </v-window-item>

      <v-window-item
      >
        <v-card
          color="transparent"
          height="547"
          flat
        >
        <v-container>
          <v-row
            no-gutters
            class="fill-height mt-12"
            align="center"
            justify="center"
            tag="v-card-text" 
          >
          <v-col
          class="mt-9"
          sm="3"
          md="4"
          >
          <img :src="require('@/assets/pic.jpg')"/>
          </v-col>
          <v-col
          class="mt-9"
          sm="3"
          md="6"
          >
            <h2 class='head'>Rich Entries</h2>

            <p> Add photos and choose fonts to make your journals your own </p>
            </v-col>
            </v-row>
            </v-container>
        </v-card>
      </v-window-item>
    </v-window>

  <!--  <v-card-actions class="justify-space-between"> -->
     <!-- <v-btn
        text
        @click="prev"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn> -->  
      <v-row
            class="fill-height"
            align="center"
            justify="center"
            tag="v-card-text" 
          >
      <v-item-group
        v-model="onboarding"
        class="text-center"
        mandatory
      >
        <v-item
          v-for="n in length"
          :key="`btn-${n}`"
          v-slot:default="{ active, toggle }"
        >
          <v-btn
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
      </v-row>
      
<v-row class='' no-gutters>
 <v-col class="">
          <Login />
          </v-col>
           <v-col class="">
          <Register />
          </v-col>
          </v-row>
    <!--  <v-btn
        text
        @click="next"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn> -->
   <!-- </v-card-actions> -->
  </v-card>
</template>

<script>
import Register from './Register'
import Login from './Login'

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
      Register,
      Login
    }
  }
</script>

<style scoped>
.head {
    font-family: 'Fredoka One';
    font-size: 2rem
}

.logo {
    font-family: 'Pacifico'; 
    font-size: 8rem
}

p {
    font-family: 'Roboto';
    font-size: 1rem;
}

.gr {
  text-align: center
}
</style>