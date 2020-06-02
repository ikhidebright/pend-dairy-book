<template>
  <v-card
    class="mx-auto mb-5"
    max-width="350"
    shaped
  >
    <v-card-title>
      <p class="display-1">Toothbrush</p>
      <v-spacer></v-spacer>
    <v-btn 
      color='blue'
      class="mt-n3 mr-n3"
      dark
      icon
      large
      >
        <v-icon>mdi-pencil-circle</v-icon>
      </v-btn> 
    </v-card-title>

    <v-card-text class="mt-n3">
      Our company takes pride in making handmade brushes.
      Our toothbrushes are available in 4 different bristel types, from extra soft to hard.
    </v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
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