<template>
  <v-card
    color="#B71C1CFF"
    dark
    flat
    tile
  >
    <v-window v-model="onboarding">
      <v-window-item
      >
        <v-card
          color="transparent"
          height="547"
          flat
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            tag="v-card-text" 
          >
           <p> Welcome</p> 
           <br>
           <h2>Pend</h2>
            </v-row>
        </v-card>
      </v-window-item>

      <v-window-item
      >
        <v-card
          color="transparent"
          height="547"
          flat
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            tag="v-card-text" 
          >
            Welcome again  
            </v-row>
        </v-card>
      </v-window-item>

      <v-window-item
      >
        <v-card
          color="transparent"
          height="547"
          flat
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
            tag="v-card-text" 
          >
            Welcome once again
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
      
<v-row class='' no-gutters>
 <v-col class="">
          <v-btn
          color="#E20A0AFF"
          dark
          tile
          x-large
          block
          >
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