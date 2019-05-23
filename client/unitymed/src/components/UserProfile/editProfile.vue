<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="green darken-1" dark v-on="on">Edit profile</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Edit your medical profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
                <v-flex xs12>
                    <v-select
                    :items="bloodTypes"
                    label="Blood type"
                    color="green darken-2"
                    v-model="profile.bloodType"
                    ></v-select>               
                </v-flex>
                <v-flex xs12>
                    <v-text-field label="Height" required v-model='profile.height' color="green darken-2"></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field label="Weight" type="text" required v-model='profile.weight' color="green darken-2"></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field label="Age" type="text" required v-model='profile.age' color="green darken-2"></v-text-field>
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
  </div>
</template>
<script>
import UserService from '@/services/UserService'

export default {
  data () {
    return {
        dialog: false,
        bloodTypes:[
            'O0',
            'A1',
            'B2',
            'AB4'
        ]
    }
  },
  methods: {
    async submit(){
      // console.log(this.profile)
        const user = await UserService.updateProfile(this.profile)
        // console.log(user)
        localStorage.setItem('user',JSON.stringify(user.data))
        this.$router.go()
    }
  },
  props: ["profile"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
