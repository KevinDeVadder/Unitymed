<template>
  <div>
      <div class="pl-4 pr-4 py-3 message-container">
        <h4  v-for="message in session.conversation">{{message.emitterName}} says: {{message.message}}</h4>
        <v-text-field
        ref="content"
        v-model="content"
        :error-messages="errorMessages"
        label="Message"
        placeholder="Type here..."
        v-on:keyup.enter="sendMessage"
        color="green darken-2"
        class="pt-5"
        ></v-text-field>
      </div>
  </div>
</template>
<script>
import io from 'socket.io-client'
import SessionService from '@/services/SessionService'

var socket = io.connect('http://localhost:4000/sessions')

export default {
  data () {
    return {
        content: '',
        user: JSON.parse(localStorage.getItem('user')),
    }
  },
  async mounted() {
      socket.emit('joinRoom', this.$route.params.id)
      socket.on('chat', (data)=>this.session.conversation.push(data))
      // socket.on('success', ()=>console.log('success'))
  },
  methods: {
      sendMessage(){
        //   console.log(this.content)
          socket.emit('chat',{
              message: this.content,
              emitter: this.user._id,
              emitterName: this.user.name,
          })
          this.content = ''
      },
  },
  props: ['session']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*TODO: Style the message container */
.message-container{
    display: flex;
    flex-direction: column;
}
.message-container h4{
    align-self: flex-start
}

</style>
