<template>
  <nav>
  <v-btn 
      color='#B71C1CFF'
      dark
      icon
      fab
      x-large
      @click="drawer = !drawer"
      >
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    
    <v-navigation-drawer v-model="drawer" app color="#B71C1CFF" dark>
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="/avatar-1.png" alt="" />
          </v-avatar>
          <p class="white--text subheading mt-1">The Net Ninja</p>
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>

export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Dashboard', icon: 'mdi-view-grid', route: '/dashboard' },
        { title: 'My Projects', icon: 'mdi-folder', route: '/projects' },
        { title: 'Team', icon: 'mdi-account', route: '/team' }
      ]
    };
  },
};
</script>