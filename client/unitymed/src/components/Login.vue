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
            label="Email"
            placeholder="basicemail@gmail.com"
            required
            color="green darken-1"
          ></v-text-field>
          <v-text-field
            ref="password"
            v-model="user.password"
            type='password'
            :rules="[
              () => !!user.password || 'This field is required'
            ]"
            label="Password"
            placeholder="Password"
            required
            color="green darken-1"
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <router-link to="/register" tag="v-btn" flat>Register</router-link>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
          </v-slide-x-reverse-transition>
          <v-btn color="green darken-1" flat @click="login">Login</v-btn>
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
      user: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    async login(){
      if(!(this.user.email === '') && !(this.user.password === '')){
        try{
          const response = (await AuthenticationService.login(this.user)).data
          // console.log(response);
          localStorage.setItem('user',JSON.stringify(response.data.user))
          localStorage.setItem('jwt',response.data.token)
          this.$store.commit('switchUserState')
          if(response.data.user.status==0){
            this.$router.push({name:'UserStory'})
          }
          else if(response.data.user.status==1){
            this.$router.push({name:'SessionRequests'})
          }
          else if(response.data.user.status==2){
            this.$router.push('/dashboard')
          }
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

