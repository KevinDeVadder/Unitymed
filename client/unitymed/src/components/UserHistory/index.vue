<template>
  <div>
    <medic-history v-for="session in sessions" :session="session" :key="session._id"></medic-history>
  </div>
</template>

<script>
import SessionService from '@/services/SessionService'
import medHistory from "./History"

export default {
  components:{
    'medic-history':medHistory,
  },
  data(){
    return{
      sessions:[]
    }
  },
  async mounted() {
    const sessions = (await SessionService.getAllSessions()).data
    this.sessions = sessions
    // console.log(sessions)
  },
}
</script>

<style>

</style>
