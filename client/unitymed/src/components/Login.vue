<template>
<div id="allin">
  <v-layout justify-center>
    <v-flex xs12 sm10 md8 lg6>
      <v-card ref="form">
        <v-card-text>
          <v-text-field
            ref="email"
            v-model="user.email"
            :rules="[() => !!e-mail || 'This field is required']"
            :error-messages="errorMessages"
            label="Email"
            placeholder="basicemail@gmail.com"
            required
          ></v-text-field>
          <v-text-field
            ref="password"
            v-model="user.password"
            :type="show1 ? 'text' : 'password'"
            :rules="[
              () => !!password || 'This field is required',
              passwordCheck
            ]"
            label="Password"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <v-btn flat>Register</v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" flat @click="submit">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>
<script>
import background from "../assets/Component.png"

export default {
    data(){
            return{
                user: {
                    email: "",
                    password: ""
            }
        }
    }
}
</script>
<style scoped>
    #allin{
        margin-top: 50px;
        }
</style>

