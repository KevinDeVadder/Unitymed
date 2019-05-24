<template>
<div>
    <v-flex xs12 class="my-3">
        <span class="display-1">Hi, {{user.name}}, this is your medical profile:</span>
        <v-flex xs6 offset-xs3 class="elevation-2 my-3">
            <v-toolbar flat color="green lighten-1" dark>
                <v-spacer></v-spacer>
                <edit-profile :profile="user.profile"/>
            </v-toolbar>
            <div class="py-4 px-3 profile">
                <span class="title mb-2">Blood type: {{user.profile.bloodType}}</span>
                <span class="title mb-2">Height: {{user.profile.height}}</span>
                <span class="title mb-2">Weight: {{user.profile.weight}}</span>
                <span class="title mb-2">Age: {{user.profile.age}}</span>
            </div>
        </v-flex>
        <v-container>
          <v-btn color="green darken-1" dark to="quiz">I have a problem</v-btn>
          <v-btn color="green darken-1" dark to="user/history">See older in-app checkups</v-btn>
          <v-btn color="green darken-1" dark to="checkups/schedule">Schedule a checkup IRL</v-btn>
        </v-container>
    </v-flex>
</div>
</template>

<script>
import editProfile from './editProfile'

export default {
  data () {
    return {
        user: JSON.parse(localStorage.getItem('user'))
    }
  },
  components:{
      editProfile
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile{
    display: flex;
    align-items: flex-start;
    flex-direction: column
}
</style>
