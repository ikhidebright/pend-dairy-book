<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{ on }">
        <v-btn
          color="#E20A0AFF"
          dark
          tile
          x-large
          block
          v-on="on">
          Log in
          </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Login</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                label="Email or Username" 
                required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                label="Password"
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
          v-on="on">
          Log in
          </v-btn>
          </v-col>
            </v-row>
          </v-container>
        </v-card-text>
      <!--  <v-card-actions>
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