<template>
  <v-row justify="center">
      <v-card>
        <v-card-title>
        <v-progress-linear
        :active="loading"
        :indeterminate="loading"
        absolute
        top
        dark
        height = '10'
        color="red"
      ></v-progress-linear>
          <span class="headline">Join Pend</span>
        </v-card-title>
        <v-card-text>
          <v-container>
          <v-alert
      text
      dense
      color="teal"
      icon="mdi-clock-fast"
      border="left"
    >
      Perfect! Our customer support staff witll call you shortly
        to assist with your request. Below is a breakdown of your details
        <br>
        </v-alert>

            <v-row>
              <v-col cols="12">
                <v-text-field v-model='email' label="Email*" type="text" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model='username' label="Username*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model='password' label="Password*" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field v-model='confirmpass' label="Confirm Password*" type="password" required></v-text-field>
              </v-col>
               <v-col cols="12">
              <v-btn
          color="#E20A0AFF"
          dark
          tile
          x-large
          block
          @click="loading = true">
          Start Writing
          </v-btn>
          </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
      </v-card>
  </v-row>
</template>

<script>
import axios from 'axios'

  export default {
    data: () => ({
      loading: false,
      username: null,
      email: null,
      password: null,
      confirmpass: null
    }),
     watch: {
      loading (val) {
        if (!val) return
        setTimeout(() => (this.loading = false), 600000)
      },
    },
  methods: {
      register () {
          axios.post("http://localhost:3000/join", {
              email: this.email,
              username: this.username,
              password: this.password
          })
          .then((res) => {
              console.log(res)
          })
      }
  }
}
</script>