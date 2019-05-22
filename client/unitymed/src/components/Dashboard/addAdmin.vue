<template>
  <div>
    <v-layout row justify-center class="my-2">
        <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on }">
        <v-btn dark raised color="green darken-1" class="mb-3" v-on="on"><v-icon dark>add</v-icon>Add new admin</v-btn>
        </template>
        <v-card>
            <v-card-title>
                <span class="headline">Admin details</span>
            </v-card-title>
            <v-card-text>
            <v-container grid-list-md>
                <v-layout wrap>
                <v-flex xs12>
                    <v-text-field label="Email*" required v-model='user.email'></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field label="Password*" type="password" required v-model='user.password'></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field label="Name*" type="text" required v-model='user.name'></v-text-field>
                </v-flex>
                </v-layout>
            </v-container>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="green darken-1" flat @click="dialog = false">Close</v-btn>
                <v-btn color="green darken-1" flat @click="submit">Add admin</v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </v-layout>
  </div>
</template>

<script>
import UserService from '@/services/UserService'

export default {
  data () {
    return {
        dialog: false,
        user:{
            name:'',
            email:'',
            password:'',
            status:2
        }
    }
  },
  methods: {
    async submit(){
        if(!(this.user.email === '') && !(this.user.password === '') && !(this.user.name === '')){
          try{
            const response = (await UserService.addSpecial(this.user)).data
            console.log(response)
            this.$router.go();
          }
          catch(err){
            console.log(err)
          }
        }
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
