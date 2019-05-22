<template>
<div>
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
</div>    
</template>

<script>
import UserService from '@/services/UserService'

export default {
  data () {
    return {
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
        medicPagination: {
            sortBy: 'Name',
            descending: false
        },
        medics:[]
    }
  },
  async mounted() {
    this.medics = (await UserService.getAllUsers({status:1, confirmed: false})).data
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
    }      
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
