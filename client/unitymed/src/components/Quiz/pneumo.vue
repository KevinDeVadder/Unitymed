<template>
  <div>
  <v-flex xs10 offset-xs1 justify-center class="my-5">
    <div class="white elevation-2">
      <v-toolbar flat dense class="green lighten-1" dark>
        <v-toolbar-title>Did the symptoms start suddenly?</v-toolbar-title>
        <slot name="action" />
      </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
        <v-radio-group v-model="response" >
          <v-radio value="1" label="Yes" color="green lighten-1"></v-radio>
          <v-radio value="0" label="No" color="green lighten-1"></v-radio>
        </v-radio-group>
        <v-btn flat @click='updateFocus' class="green lighten-1" dark>Next</v-btn>
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
      updateFocus(){
          if (this.response==1) alert('flu')
          else alert('pneumonia')
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
