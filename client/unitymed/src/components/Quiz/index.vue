<template>
  <div>
    <component :is="mainFocus" @button-clicked="changeFocus"/>
  </div>
</template>

<script>
import diseaseType from './diseaseType'
import mental from './mental'
import physical from './physical'
import pneumo from './pneumo'
import nefro from './nefro'

export default {

  data () {
    return {
         mainFocus: 'disease-type'
    }
  },
  components: {
      diseaseType,
      mental,
      physical,
      pneumo,
      nefro
  },
  methods:{
      changeFocus(e){
          this.mainFocus = e
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
