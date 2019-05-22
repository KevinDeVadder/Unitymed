<template>
<div>
    <v-flex xs8 offset-xs2 justify-center class="my-5">
    <div class="white elevation-2">
      <v-toolbar flat dense class="green lighten-1" dark>
        <v-toolbar-title>
          {{session.patientName}} - {{session.medicName}}
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="green lighten-1" dark v-on="on">Review medic</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Rate this medic</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                    <v-rating v-model="rating" half-increments></v-rating>
                </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green lighten-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="green lighten-1" flat @click="submit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        <slot name="action" />
      </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
        <h4 v-for="message in messages">{{message.emitterName}}: {{message.message}}</h4>
                <v-text-field
            ref="content"
            v-model="content"
            :rules="[() => !!user.email || 'This field is required']"
            :error-messages="errorMessages"
            label="Message"
            placeholder="Type here..."
            v-on:keyup.enter="sendMessage"
            
          ></v-text-field>
      </div>
    </div>
    </v-flex>
</div>
</template>
<script>
import io from 'socket.io-client'
import SessionService from '@/services/SessionService'
import UserService from '@/services/UserService'

var socket = io.connect('http://localhost:4000/sessions')

export default {
  data () {
    return {
        content: '',
        user: JSON.parse(localStorage.getItem('user')),
        session:{},
        dialog:'',
        rating: 0,
        messages:[]
    }
  },
  async mounted() {
      this.session = (await SessionService.getOneSession(this.$route.params.id)).data
      // console.log(this.session)
      socket.emit('joinRoom', this.$route.params.id)
      socket.on('chat', (data)=>this.messages.push(data))
      // socket.on('success', ()=>console.log('success'))
  },
  methods: {
      sendMessage(){
          console.log(this.content)
          socket.emit('chat',{
              message: this.content,
              emitter: this.user._id,
              emitterName: this.user.name,
          })
          this.content = ''
      },
      async submit(){
          const medic = await UserService.rateMedic(this.session.medicId, {review: this.rating})
          this.$router.go()
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
