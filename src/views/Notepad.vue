<template>
  <div class="about">
  <Head />
  <HeaderPen />
  <v-container>
   <v-col cols="12" md="9" class='mx-auto'>
     <v-textarea
          solo
          tile
          label='Title'
          no-resize
          height = 3vh
          name="input-7-4"
        ></v-textarea>

        <v-textarea
          solo
          tile
          no-resize
          height = 60vh
          name="input-7-4"
        ></v-textarea>
      </v-col>
      </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderPen from '@/components/HeaderPen.vue'
import Head from '@/components/Head.vue'

export default {
  name: 'Home',
  components: {
   HeaderPen,
   Head
  }
}
</script>


<style scoped>
.about {
  background-color: #f1f1f1
}
</style>
