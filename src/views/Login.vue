<template>
<v-container class="log">
<div class="mt-12">
<br>
<br>
<br>
<br>
<br>
<br>
    <span class="headline">
    </span>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="Email Address"
      color="#ffffff"
      type="email"
      prepend-inner-icon="mdi-email"
      dark
      single-line
      required
    ></v-text-field>      
<v-text-field
      v-model="password"
      :rules="passwordRules"
      label="Password"
      prepend-inner-icon="mdi-lock"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :type="show1 ? 'text' : 'password'"
      color="#ffffff"
      @click:append="show1 = !show1"
      single-line
      dark
      required
    ></v-text-field>
   <!-- <router-link
    to="recover"
    class="mt-4"
    >
    Forgot Password?
    </router-link> -->
    <v-btn
      class="mt-4"
      color="#E20A0AFF"
      tile
      dark
      x-large
      block
      @click='login'
    >
      LOGIN
    </v-btn>
    </v-form>
  <router-link
    to="recover"
    class="mt-4"
    >
    Forgot Password?
    </router-link> 
  </div>
    </v-container>
</template>

<script>

  export default {
    components: {
    },
    data: () => ({
      loading: false,
      email: null,
      password: null,
      valid: true,
      show1: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      passwordRules: [
        v => !!v || 'Password is Required'
      ]
    }),
    methods: {
       validate () {
        this.$refs.form.validate()
      },
      login () {
        this.validate()
        if (!this.valid) {
        } else {
        }
      },
    },
    mounted () {
      this.validate()
    }
  }
</script>

<style>
a {
    color: #fff;
}

div.v-messages.theme--dark.error--text{
    color: #ffffff !important;
}

.v-application .error--text {
    color: #f1f1f1 !important;
    caret-color: #ff5252 !important;
}

.v-input__control {
    color: #f1f1f1 !important;
    caret-color: #ff5252 !important;
}

.log {
  background-color: #B71C1CFF;
  min-height: 100vh;
  max-height: auto
}
</style>