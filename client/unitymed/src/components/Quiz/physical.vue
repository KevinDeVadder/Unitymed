<template>
  <div>
    <h3>In what body area is your problem located?</h3>
    <p @click="type='pneumo'">Lungs</p>
    <p @click="type='nefro'">Kidneys</p>
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
