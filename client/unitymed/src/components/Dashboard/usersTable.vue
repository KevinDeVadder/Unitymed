<template>
  <div>
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
  data () {
    return {
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
        users:[]
    }
  },
  async mounted() {
    this.users = (await UserService.getAllUsers({confirmed: true})).data
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
