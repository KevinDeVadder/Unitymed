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
        <v-rating v-model="rating" readonly></v-rating>
        <v-btn class="green lighten-1" dark>Chat</v-btn>
      </div>
    </div>
    </v-flex>
  </div>
</template>

<script>
export default {
  data(){
    return{
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
}
</script>

<style>

</style>
