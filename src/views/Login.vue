<template>
<div>
<Head />
  <v-row justify="center">
      <v-card 
      tile
      dense
      class='mt-5'
      >
        <v-card-title>
          <span class="headline">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                v-model='email'
                label="Email" 
                outlined
                required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                v-model='password'
                label="Password"
                outlined
                type="password"
                required></v-text-field>
              </v-col>
               <v-col cols="12">
              <v-btn
          color="#E20A0AFF"
          dark
          tile
          x-large
          block
          @click='login'
          v-on="on">
          Log in
          </v-btn>
          </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
  </v-row>
  </div>
</template>

<script>
import axios from 'axios'
import Head from '@/components/Head'

  export default {
    components: {
      Head
    },
    data: () => ({
      email: null,
      password: null
    }),
    methods: {
      login () {
        axios.post("http://localhost:3000/login", {
          email: this.email,
          password: this.password
        })
        .then((res) => {
          console.log(res)
          this.$store.commit('setUser', res.data.result)
          this.$router.push({name: 'Pens'})
        })
      },
    }
  }
</script>