<template>
  <div>
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
        messages:[]
    }
  },
  async mounted() {
      socket.emit('joinRoom', this.$route.params.id)
      socket.on('chat', (data)=>this.messages.push(data))
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

</style>
