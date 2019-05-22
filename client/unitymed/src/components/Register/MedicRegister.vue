<template>
<div>
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6 class="my-5">
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
            ref="name"
            v-model="user.name"
            :rules="[() => !!user.name || 'This field is required']"
            :error-messages="errorMessages"
            label="Name"
            placeholder="Full Name"
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
          <v-text-field
            ref="Certificate number"
            v-model="user.certificate.number"
            :rules="[() => !!user.certificate.number || 'This field is required']"
            :error-messages="errorMessages"
            label="Certificate number"
            placeholder="Number"
            required
          ></v-text-field>
          <v-text-field
            ref="Certificate issuing date"
            v-model="user.certificate.date"
            :rules="[() => !!user.certificate.date || 'This field is required']"
            :error-messages="errorMessages"
            label="Certificate issuing date"
            placeholder="Certificate issuing date"
            required
          ></v-text-field>
          <v-text-field
            ref="Specialization"
            v-model="user.specializare"
            :rules="[() => !!user.specializare || 'This field is required']"
            :error-messages="errorMessages"
            label="Specialization"
            placeholder="Specialization"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <router-link to="/login" tag="v-btn" flat>I'm not Mercy</router-link>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
          </v-slide-x-reverse-transition>
          <v-btn color="green darken-2" flat @click="register">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data(){
    return{
      user: {
        email: "",
        password: "",
        certificate:{
          number: '',
          date: ''
        },
        specialization: "",
        status: 1
      },
    }
  },
  methods: {
    async register(){
      if(!(this.user.email === '') && !(this.user.password === '') && !(this.user.name === '')){
        // console.log("hit")
        try{
          const status = await AuthenticationService.register(this.user)
          alert("You've been registered into our database. Please wait for an admin to review your account. It can take up to 3 days.")
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

</style>

