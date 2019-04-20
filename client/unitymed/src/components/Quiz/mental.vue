<template>
  <div>
    <v-flex xs10 offset-xs1 justify-center class="my-5">
    <div class="white elevation-2">
      <v-toolbar flat dense class="green lighten-1" dark>
        <v-toolbar-title>Do you feel constant sadness or emptyness?</v-toolbar-title>
        <slot name="action" />
      </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
        <v-radio-group v-model="responses[0]" >
          <v-radio value="1" label="Yes" color="green lighten-1"></v-radio>
          <v-radio value="0" label="No" color="green lighten-1"></v-radio>
        </v-radio-group>
        
      </div>
    </div>
    </v-flex>

    <v-flex xs10 offset-xs1 justify-center class="my-5">
    <div class="white elevation-2">
      <v-toolbar flat dense class="green lighten-1" dark>
        <v-toolbar-title>Do you feel a constant fear of people?</v-toolbar-title>
        <slot name="action" />
      </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
        <v-radio-group v-model="responses[1]" >
          <v-radio value="0" label="Yes" color="green lighten-1"></v-radio>
          <v-radio value="1" label="No" color="green lighten-1"></v-radio>
        </v-radio-group>
        
      </div>
    </div>
    </v-flex>

    <v-flex xs10 offset-xs1 justify-center class="my-5">
    <div class="white elevation-2">
      <v-toolbar flat dense class="green lighten-1" dark>
        <v-toolbar-title>Do you have panic attacks?</v-toolbar-title>
        <slot name="action" />
      </v-toolbar>

      <div class="pl-4 pr-4 pt-2 pb-2">
        <v-radio-group v-model="responses[2]" >
          <v-radio value="1" label="Yes" color="green lighten-1"></v-radio>
          <v-radio value="0" label="No" color="green lighten-1"></v-radio>
        </v-radio-group>
        
      </div>
    </div>
    </v-flex>
    
    <v-btn flat @click='updateFocus' class="green lighten-1" dark>Next</v-btn>

  </div>
</template>

<script>
export default {

  data () {
    return {
        responses:[],
        type:''
    }
  },
  methods: {
      updateFocus(){
          var responses = this.responses
          console.log(responses)
          const arrSum = responses.reduce((a,b) => a + b, 0)
          console.log(arrSum)
            var medie = arrSum/responses.length
            console.log(medie)
          if (medie>0.5) this.$router.push({ path: 'medlist', query: { specialist: 'Psychiatry', diagnosis: 'depression'} })
          else this.$router.push({ path: 'medlist', query: { specialist: 'Psychiatry', diagnosis: 'anxiety'} })
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
