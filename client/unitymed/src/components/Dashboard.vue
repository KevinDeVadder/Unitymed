<template>
<div>
<v-layout row justify-center class="my-2">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="green lighten-1" dark v-on="on">Add admin</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Account details</span>
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
          <v-btn color="green lighten-1" flat @click="dialog = false">Close</v-btn>
          <v-btn color="green lighten-1" flat @click="submit">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>

    <v-toolbar flat color="white">
      <v-toolbar-title>Doctors to review</v-toolbar-title>
    </v-toolbar>
    <v-data-table
      :headers="medicHeaders"
      :pagination.sync="medicPagination"
      :items="medics">
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">
          {{props.item.name}}
        </td>
        <td class="text-xs-left">
          {{props.item.email}}
        </td>
        <td class="text-xs-left">
          {{props.item.specialization}}
        </td>
        <td class="text-xs-left">
          {{props.item.certificate.number}}/{{props.item.certificate.date}}
        </td>
        <td class="text-xs-left">
          <v-icon
            small
            class="mr-2"
            @click="acceptMedic(props.item)"
          >
            check
          </v-icon>
          <v-icon
            small
            @click="rejectMedic(props.item)"
          >
            close
          </v-icon>
        </td>
      </template>
    </v-data-table>

     <v-toolbar flat color="white">
      <v-toolbar-title>All users</v-toolbar-title>
    </v-toolbar>
    <v-data-table
      :headers="userHeaders"
      :pagination.sync="userPagination"
      :items="users">
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">
          {{props.item.name}}
        </td>
        <td class="text-xs-left">
          {{props.item.email}}
        </td>
        <td class="text-xs-left" v-if="props.item.specialization">
          {{props.item.specialization}}
        </td>
        <td class="text-xs-left" v-if="props.item.specialization">
          {{props.item.certificate.number}}/{{props.item.certificate.date}}
        </td>
      </template>
         <template v-slot:footer>
      <td>
        <small>*if the user has no specialization/certificate, it means he is a patient</small>
      </td>
    </template>
    </v-data-table>
</div>
</template>
<script>
import UserService from '@/services/UserService'

export default {
    data(){
        return{
          dialog: false,
        medicHeaders: [
            {
            text: 'Full Name',
            value: 'name'
            },
            {
            text: 'Email',
            value: 'email'
            },
            {
            text: 'Specialization',
            value: 'specialization'
            },
            {
            text: 'Certificate',
            value: 'certificate'
            },
            {
            text: 'Actions',
            sortable: false 
            }
        ],
        userHeaders: [
            {
            text: 'Full Name',
            value: 'name'
            },
            {
            text: 'Email',
            value: 'email'
            },
            {
            text: 'Specialization',
            value: 'specialization'
            },
            {
            text: 'Certificate',
            value: 'certificate'
            }
        ],
        userPagination: {
            sortBy: 'Name',
            descending: false
        },
        medicPagination: {
            sortBy: 'Name',
            descending: false
        },
            medics:[],
            users:[],
            user:{
              name:'',
              email:'',
              password:'',
              status:2
            }
        }
    },
    async mounted() {
        this.medics = (await UserService.getAllUsers({status:1, confirmed: false})).data
        this.users = (await UserService.getAllUsers({confirmed: true})).data
        console.log(this.users)
    },
    methods: {
        async acceptMedic(pmedic){
            if (confirm("Accept " + pmedic.name)) {
                try{
                    const medic = (await UserService.confirmMedic(pmedic._id, {confirmed: true})).data
                    console.log(medic)
                    this.$router.go();
                }
                catch(err){
                    console.log(err)
                } 
            }
        },
        async rejectMedic(pmedic){
            if (confirm("Remove " + pmedic.name)) {
                try{
                    const medic = (await UserService.confirmMedic(pmedic._id, {confirmed: false})).data
                    console.log(medic)
                    this.$router.go();
                }
                catch(err){
                    console.log(err)
                } 
            }
        },
      async submit(){
        if(!(this.user.email === '') && !(this.user.password === '') && !(this.user.mail === '')){
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
