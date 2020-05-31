<template>
<div>
  <v-row justify="center">
      <v-card 
      :loading="loading"
      shaped
      outlined
      text
      flat
      class='mt-12'
      >
        <v-card-title>
          <span class="headline"></span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
            <v-col cols="12">
            <v-form>
                <v-text-field
                v-model='email'
                label="Email" 
                outlined
                required></v-text-field>

                <v-text-field
                v-model='password'
                label="Password"
                outlined
                type="password"
                required></v-text-field>

                <v-btn
                color="#E20A0AFF"
                dark
                @click='login'
                >
                Log in
                </v-btn>
                 </v-form>
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

  export default {
    components: {
    },
    data: () => ({
      loading: false,
      email: null,
      password: null
    }),
    methods: {
      login () {
        this.loading = true
        axios.post("http://localhost:3000/login", {
          email: this.email,
          password: this.password
        })
        .then((res) => {
          if (res.data.status == 201) {
          console.log(res)
          this.$store.commit('setUser', res.data.result)
          this.$router.push({name: 'Pens'})
          }
        })
      },
    }
  }
</script>