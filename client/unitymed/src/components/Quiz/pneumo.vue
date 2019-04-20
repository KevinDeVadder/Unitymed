<template>
  <div>
    <h3>Did the symptoms start suddenly?</h3>
    <p @click="response=1">Yes</p>
    <p @click="response=0">No</p>
    <span @click="updateFocus">Next</span>
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
