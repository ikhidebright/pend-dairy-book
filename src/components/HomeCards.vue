<template>
  <v-card
    color="red"
    dark
    img="https://www.lifewire.com/thmb/TGYn5bhIX6SxfCz2nkFfUDqqFFo=/4592x3056/filters:fill(auto,1)/s-o-c-i-a-l-c-u-t-hCjo_bIkVig-unsplash-6ee2f8f1046649539d03bc0ebfa73769.jpg"
    flat
    tile
  >
    <v-window v-model="onboarding">
      <v-window-item
        v-for="n in length"
        :key="`card-${n}`"
      >
        <v-card
          color="transparent"
          height="532"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            tag="v-card-text" 
          >
            Transparent themed, for background-imaged slides. Background color black added for demonstration purposes.
          </v-row>
        </v-card>
      </v-window-item>
    </v-window>

  <!--  <v-card-actions class="justify-space-between"> -->
     <!-- <v-btn
        text
        @click="prev"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn> -->  
      <v-row
            class="fill-height"
            align="center"
            justify="center"
            tag="v-card-text" 
          >
      <v-item-group
        v-model="onboarding"
        class="text-center"
        mandatory
      >
        <v-item
          v-for="n in length"
          :key="`btn-${n}`"
          v-slot:default="{ active, toggle }"
        >
          <v-btn
            :input-value="active"
            icon
            @click="toggle"
          >
            <v-icon>mdi-record</v-icon>
          </v-btn>
        </v-item>
      </v-item-group>
      </v-row>
      
<v-row>
 <v-col>
          <v-btn
          color="#001F90"
          dark
          tile
          large
          block
          >
          Log in
          </v-btn>
          </v-col>

           <v-col>
          <v-btn
          color="#001F90"
          dark
          tile
          large
          block
          >
          Sign up
          </v-btn>
          </v-col>
          </v-row>


    <!--  <v-btn
        text
        @click="next"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn> -->
   <!-- </v-card-actions> -->
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      length: 3,
      onboarding: 0,
    }),

    methods: {
      next () {
        this.onboarding = this.onboarding + 1 === this.length
          ? 0
          : this.onboarding + 1
      },
      prev () {
        this.onboarding = this.onboarding - 1 < 0
          ? this.length - 1
          : this.onboarding - 1
      },
    },
  }
</script>