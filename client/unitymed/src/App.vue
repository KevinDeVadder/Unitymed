<template>
<div id="app">
  <v-app>
    
      <v-toolbar flat app color="green darken-1" class="white--text">
        <v-toolbar-side-icon @click="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
        <v-toolbar-title>UnityMed</v-toolbar-title>
      </v-toolbar>

          <v-navigation-drawer app v-model="drawer">
            <p class="navMenu">Menu</p> 
            <p class="nav" v-if='!isUserLoggedIn'>Login</p> 
            <p class="nav" v-if='!isUserLoggedIn'>Register</p>
            <p class="nav" v-if='isUserLoggedIn'>Profile</p> 
            <p class="nav" v-if='isUserLoggedIn'>Messages</p>
            <p class="nav" v-if='isUserLoggedIn' @click='logOut'>Sign-out</p>

          </v-navigation-drawer>
    <v-content>

      <router-view/>

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
  },	
  computed: {
	    isUserLoggedIn(){
        return this.$store.getters.getUserState
      }
  },
	methods: {
  		logOut(){
        localStorage.removeItem('user')
        localStorage.removeItem('jwt');
        this.$store.commit('switchUserState')
        this.$router.push('login')
      }
  }
}
</script>

<style>
.nav{
  padding-top: 3vh;
  padding-bottom: 3vh;
  margin-bottom: 0;
  font-size: 1em;
  border-bottom: 1px grey solid;
  cursor: pointer
}
.navMenu{
  padding-top: 3vh;
  padding-bottom: 3vh;
  margin-bottom: 0;
  font-size: 1em;
  border-bottom: 1px grey solid;
  background-color: #2E7D32;
  color: white;
  font-size: 1.5em;
}

.nav:hover{
  background-color: #A5D6A7;
  color: white;
  box-shadow:10px black;
  cursor: pointer;
}

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
