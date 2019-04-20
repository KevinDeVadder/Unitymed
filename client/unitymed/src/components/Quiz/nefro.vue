<template>
  <div>
    <h3>Is blood present in your urine?</h3>
    <p @click="responses[0]=1">Yes</p>
    <p @click="responses[0]=0">No</p>
        <h3>Do you have problems with your blood pressure?</h3>
    <p @click="responses[1]=1">Yes</p>
    <p @click="responses[1]=0">No</p>
        <h3>Are you oftenly tired?</h3>
    <p @click="responses[2]=1">Yes</p>
    <p @click="responses[2]=0">No</p>
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
          if (medie>0.5) alert('insuficienta renala')
          else alert('infectie urinara')
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
