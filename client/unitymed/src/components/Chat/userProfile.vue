<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn class="green darken-1" dark v-on="on">Show profile</v-btn>
      </template>
      <v-card class="px-3 py-2">
        <v-card-title>
          <span class="headline">{{profile.name}}'s profile</span>
        </v-card-title>
        <v-card-text>
            <v-layout wrap>
                <div class="py-4 profile">
                    <span class="title mb-2">Blood type: {{profile.bloodType}}</span>
                    <span class="title mb-2">Height: {{profile.height}}</span>
                    <span class="title mb-2">Weight: {{profile.weight}}</span>
                    <span class="title mb-2">Age: {{profile.age}}</span>
                </div>
            </v-layout>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green lighten-1" flat @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>

export default {
  data () {
    return {
        dialog: false
    }
  },
  methods: {

  },
  props: ["profile"],

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.profile{
    display: flex;
    align-items: flex-start;
    flex-direction: column
}
</style>
