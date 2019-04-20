<template>
<div id="app">
  <v-app>
    
      <v-toolbar flat app color="green darken-1" class="white--text">
        <v-toolbar-side-icon @click="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
        <v-toolbar-title>UnityMed</v-toolbar-title>
      </v-toolbar>

          <v-navigation-drawer app v-model="drawer"><p>11</p> </v-navigation-drawer>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</div>
</template>

<script>

export default {

  name: 'App',
  data () {
    return {
      drawer: false
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.v-toolbar__title{
  display: flex;
  justify-content: center;
}
</style>
