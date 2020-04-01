<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn
          color="#E20A0AFF"
          dark
          tile
          x-large
          block
          v-on="on">
          Sign up
          </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Join Pend</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Email*" type="text" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Username*" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Confirm Password*" type="password" required></v-text-field>
              </v-col>
               <v-col cols="12">
              <v-btn
          color="#E20A0AFF"
          dark
          tile
          x-large
          block
          v-on="on">
          Start Writing
          </v-btn>
          </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
     <!--   <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      dialog: false,
    }),
  }
</script>