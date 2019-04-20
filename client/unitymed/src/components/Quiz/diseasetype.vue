<template>
  <div>
    <v-flex xs10 offset-xs1 justify-center class="my-5">
    <div class="white elevation-2">
      <v-toolbar flat dense class="green lighten-1" dark>
        <v-toolbar-title>What type is your problem?</v-toolbar-title>
        <slot name="action" />
      </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
        <v-radio-group v-model="type" >
          <v-radio value="mental" label="Mental" color="green lighten-1"></v-radio>
          <v-radio value="physical" label="Physical" color="green lighten-1"></v-radio>
        </v-radio-group>
        <v-btn flat @click='lol' class="green lighten-1" dark>Next</v-btn>
      </div>
    </div>
    </v-flex>
  </div>
</template>

<script>
export default {

  data () {
    return {
        type:''
    }
  },
  methods: {
    lol(){this.$emit('button-clicked', this.type); console.log(this.type)}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
