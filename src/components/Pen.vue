<template>
  <v-card
    class="mx-auto mb-5"
    max-width="400"
  >
    <v-card-title>
      <h4 class="display-1">Toothbrush</h4>
      <v-spacer></v-spacer>
     <!-- <span class="title">$4.99</span> -->
    </v-card-title>

    <v-card-text>
      Our company takes pride in making handmade brushes.
      Our toothbrushes are available in 4 different bristel types, from extra soft to hard.
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4"
      >
        Edit
      </v-btn>
     <!-- <v-btn
        text
        color="deep-purple accent-4"
      >
        Bookmark
      </v-btn> -->
      <v-spacer></v-spacer>
    <!--  <v-btn 
      color='blue'
      dark
      icon
      Small
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn> -->


      <v-btn
      color='green'
      dark
      icon
      Small
      >
        <v-icon>mdi-eye</v-icon>
      </v-btn>

       <v-btn
      color='red'
      dark
      icon
      Small
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      
    </v-card-actions>
  </v-card>
</template>