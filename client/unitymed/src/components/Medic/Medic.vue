<template>
  <div>
    <v-flex xs8 offset-xs2 justify-center class="my-5">
    <div class="white elevation-2">
      <v-toolbar flat dense class="green lighten-1" dark>
        <v-toolbar-title>
          <v-icon
            large
            class="mr-2"
            >
            account_circle
          </v-icon>
          {{medic.name}}
        </v-toolbar-title>
        <slot name="action" />
      </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
        <h3>Speciality: {{medic.specialization}}</h3>
        <v-rating v-model="rating" readonly half-increments></v-rating>
        <v-btn class="green lighten-1" dark @click='createNewSession'>Chat</v-btn>
      </div>
    </div>
    </v-flex>
  </div>
</template>

<script>
import SessionService from '@/services/SessionService'

export default {
  data(){
    return{
      user: JSON.parse(localStorage.getItem('user'))
    }
  },
  props: ['medic'],
  computed: {
    rating(){
      return (this.medic.reviews.reduce((a,b) => a + b, 0))/this.medic.reviews.length
    }
  },
  mounted() {
    console.log(this.medic)
  },
  methods: {
    async createNewSession(){
      const session = (await SessionService.createSession({medicId: this.medic._id, medicName: this.medic.name, patientName: this.user.name, diagnosis: this.$route.query.diagnosis})).data
      this.$router.push({name:'Chat', params:{id: session._id}})
    }
  },
}
</script>

<style>

</style>
