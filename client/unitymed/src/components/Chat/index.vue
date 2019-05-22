<template>
<div>
    <v-flex xs8 offset-xs2 justify-center class="my-5">
    <div class="white elevation-2">
      <v-toolbar flat dense class="green lighten-1" dark>
        <v-toolbar-title>
          {{session.patientName}} - {{session.medicName}}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <feedback-form :medicId="session.medicId" />
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
