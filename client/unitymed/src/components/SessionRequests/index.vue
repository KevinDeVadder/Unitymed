<template>
<div>
    <v-flex xs12 class="my-3">
        <span class="display-1">Hi, {{user.name}}, here are your checkup requests:</span>
        <session v-for="session in sessions" :key="session._id" :session="session"/>
        <v-btn color="green darken-1" dark :to="{name: 'MedicHistory'}">See older in-app checkups</v-btn>
        <v-btn color="green darken-1" dark to="checkups/program">See schedule requests</v-btn>
    </v-flex>
</div>
</template>

<script>
import session from './session'
import SessionService from '@/services/SessionService'

export default {
  data () {
    return {
        user: JSON.parse(localStorage.getItem('user')),
        sessions:[]
    }
  },
  components:{
    session
  },
  async mounted() {
    const sessions = (await SessionService.getAllSessions({accepted: false})).data
    console.log(sessions)
    this.sessions = sessions
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
