<template>
<v-hover>
  <template v-slot="{ hover }">
  <v-card
    class="mx-auto mb-5"
    max-width="350"
    :elevation="hover ? 24 : 6"
    shaped
    to="/"
    flat
    light
  >
    <v-card-title class="mb-n7">
      <p class="display-1">Toothbrush</p>
      <v-spacer></v-spacer>
    <!-- <v-btn 
      color='blue'
      class="mt-n5 mr-n3"
      dark
      icon
      large
      >
        <v-icon>mdi-pencil-circle</v-icon>
      </v-btn>  -->
    </v-card-title>
    <v-card-subtitle class="ml-2">
      Our company takes pride in making handmade brushes.
      Our toothbrushes are available in 4 different bristel types, from extra soft to hard.
    </v-card-subtitle>
    <v-card-actions class="mt-n4">
      <v-btn depressed small>Edit</v-btn>
    <v-spacer></v-spacer>
     <v-btn 
      color='pink'
      dark
      icon
      Small
      >
      <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn
      color='green'
      dark
      icon
      Small
      >
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>

       <v-btn
      color='red'
      icon
      Small
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      
    </v-card-actions>
  </v-card>
      </template>
    </v-hover>
</template>

<style scoped>
.display-1 {
    font-family: 'Fredoka One' !important;
}
</style>