<template>
  <div>
    <v-flex xs8 offset-xs2 justify-center class="my-5">
    <div class="white elevation-2">
      <v-toolbar flat dense class="green lighten-1" dark>
        <v-toolbar-title>
          <v-icon
            large
            class="mr-2"
            >
            account_circle
          </v-icon>
          {{session.patientName}}
        </v-toolbar-title>
        <slot name="action" />
      </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
        <h3>Diagnosis: {{session.diagnosis}}</h3>
        <v-btn class="green lighten-1" dark :to="{name: 'Chat', params:{id:session._id}}">See Chat</v-btn>
      </div>
    </div>
    </v-flex>
  </div>
</template>

<script>
import SessionService from '@/services/SessionService'

export default {
  data(){
    return{
    }
  },
  props:['session'],
  methods: {
  },
}
</script>

<style>

</style>
