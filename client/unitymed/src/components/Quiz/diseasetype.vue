<template>
  <div>
    <h3>What type is your problem?</h3>
    <p @click="type='mental'">Mental</p>
    <p @click="type='physical'">Physical</p>
    <span @click="$emit('button-clicked', type)">Next</span>
  </div>
</template>

<script>
export default {

  data () {
    return {
        type:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
