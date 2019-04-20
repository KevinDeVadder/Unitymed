<template>
<div>
<div id="allin">
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="email"
            v-model="user.email"
            :rules="[() => !!user.email || 'This field is required']"
            :error-messages="errorMessages"
            label="Email"
            placeholder="basicemail@gmail.com"
            required
          ></v-text-field>
          <v-text-field
            ref="Name"
            v-model="user.name"
            :rules="[() => !!user.name || 'This field is required']"
            :error-messages="errorMessages"
            label="Name"
            placeholder="Name"
            required
          ></v-text-field>
          <v-text-field
            ref="password"
            v-model="user.password"
            :type="show1 ? 'text' : 'password'"
            :rules="[
              () => !!user.password || 'This field is required',
              passwordCheck
            ]"
            label="Password"
            placeholder="Password"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <router-link to="/login" tag="v-btn" flat>I'm Mercy</router-link>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" flat @click="register">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data(){
    return{
      component: 'index',
      user: {
          email: "",
          password: "",
          name: "",
          status: 0
      }
    }
  },
  methods: {
      async register(){
        if(!(this.user.email === '') && !(this.user.password === '') && !(this.user.name === '')){
          // console.log("hit")
          try{
            const status = await AuthenticationService.register(this.user)
            alert("We've sent you a confirmation email! Check it out :D")
            this.$router.push('/login')
          }
          catch(err){
            console.log(err)
          }
        }
      }
  },
}
</script>
<style scoped>
    #allin{
        margin-top: 50px;
        }
</style>

