<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="green lighten-1" dark v-on="on">Review medic</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Rate this medic</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                    <v-rating v-model="rating" half-increments></v-rating>
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
        rating: 0,
        dialog: false
    }
  },
  methods: {
    async submit(){
        const medic = await UserService.rateMedic(this.medicId, {review: this.rating})
        this.$router.go()
    }
  },
  props: ["medicId"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
