<template>
<div>
    <v-flex xs8 offset-xs2 justify-center class="my-5">
    <span class="title">Patient name: {{session.patientName}}</span><br>
    <span class="title">Medic name: {{session.medicName}}</span>
    <div class="white elevation-2 mt-2">
      <v-toolbar flat dense class="green lighten-1 py-2" dark>
        <feedback-form :sessionId="session._id" :rating="session.rating" />
        <v-spacer></v-spacer>
        <v-btn class="green darken-1" dark>Start call</v-btn>
      </v-toolbar>
      <chat :session="session" />
    </div>
    </v-flex>
</div>
</template>
<script>
import feedbackForm from './feedbackForm'
import chat from './chat'

import SessionService from '@/services/SessionService'

export default {
  data () {
    return {
      session:{},
    }
  },
  async mounted() {
    this.session = (await SessionService.getOneSession(this.$route.params.id)).data
  },
  components:{
    feedbackForm,
    chat
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
