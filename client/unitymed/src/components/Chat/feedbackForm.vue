<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px" v-if="!rating">
      <template v-slot:activator="{ on }">
        <v-btn class="green darken-1" dark v-on="on">Review medic</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Rate this medic</span>
        </v-card-title>
        <v-card-text>
          <small>*you can only review a medic once and can't change your review later</small>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                    <v-rating v-model="ratinger" color="green darken-1" half-increments></v-rating>
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
    <div v-else>
      <span>Rating:</span>
      <v-rating v-model="rating" color="white" background-color="white" readonly half-increments></v-rating>
    </div>
  </div>
</template>
<script>
import UserService from '@/services/UserService'

export default {
  data () {
    return {
        dialog: false,
        ratinger:0
    }
  },
  methods: {
    async submit(){
        const medic = await UserService.rateMedic(this.sessionId, {review: this.ratinger})
        this.$router.go()
    }
  },
  props: ["sessionId", "rating"]
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
