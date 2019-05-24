<template>
<div>
    <v-flex xs12 class="my-3">
        <span class="display-1">Here are all of your old checkups:</span>
        <session v-for="session in sessions" :key="session._id" :session="session"/>
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
    const sessions = (await SessionService.getAllSessions({accepted: true})).data
    console.log(sessions)
    this.sessions = sessions
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
