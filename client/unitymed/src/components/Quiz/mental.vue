<template>
  <div>
    <h3>Do you feel constant sadness or emptyness?</h3>
    <p @click="responses[0]=1">Yes</p>
    <p @click="responses[0]=0">No</p>
        <h3>Do you feel a constant fear of people?</h3>
    <p @click="responses[1]=0">Yes</p>
    <p @click="responses[1]=1">No</p>
        <h3>Do you have panic attacks?</h3>
    <p @click="responses[2]=0">Yes</p>
    <p @click="responses[2]=1">No</p>
    <span @click="updateFocus">Next</span>
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
          if (medie>0.5) alert('depression')
          else alert('anxiety')
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
