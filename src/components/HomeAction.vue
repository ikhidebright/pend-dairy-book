<template>
<div class=""
<v-row class='' no-gutters>
 <v-col class="acc">
          <v-btn
          color="#E20A0AFF"
          dark
          tile
          x-large
          block
          to="/login">
          Log in
          </v-btn>
          </v-col>
           <v-col class="">
          <v-btn
          color="#E20A0AFF"
          dark
          tile
          x-large
          block
          to="/register">
          Sign up
          </v-btn>
          </v-col>
          </v-row>
  </div>
</template>

<script>
  export default {
    name: "HomeAction",
    data: () => ({
    })
  }
</script>

<style scoped>

.acc {
    height: 5vh
}

p {
    font-family: 'Roboto';
    font-size: 1rem;
}

.gr {
  text-align: center
}
</style>