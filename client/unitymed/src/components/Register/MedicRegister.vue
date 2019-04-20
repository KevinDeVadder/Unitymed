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
            ref="name"
            v-model="user.name"
            :rules="[() => !!e-mail || 'This field is required']"
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
              () => !!password || 'This field is required',
              passwordCheck
            ]"
            label="Password"
            required
          ></v-text-field>
          <v-text-field
            ref="Numar Certificat"
            v-model="user.nrcert"
            :rules="[() => !!nrcert || 'This field is required']"
            :error-messages="errorMessages"
            label="Numar Certificat"
            placeholder="Numar"
            required
          ></v-text-field>
          <v-text-field
            ref="Data Certificat"
            v-model="user.dataCert"
            :rules="[() => !!dataCert || 'This field is required']"
            :error-messages="errorMessages"
            label="Data Certificat"
            placeholder="Data"
            required
          ></v-text-field>
          <v-text-field
            ref="Specializare"
            v-model="user.specializare"
            :rules="[() => !!specializare || 'This field is required']"
            :error-messages="errorMessages"
            label="Specializare"
            placeholder="Specializare"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-5"></v-divider>
        <v-card-actions>
          <router-link to="/login" tag="v-btn" flat>I'm not Mercy</router-link>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" flat @click="submit">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
  </div>
</template>
<script>

export default {
    data(){
            return{
                user: {
                    email: "",
                    password: "",
                    nrcert: "",
                    dataCert: "",
                    specializare: ""

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

