<template>
  <div>
    <medic-history></medic-history>
  </div>
</template>

<script>
import medHistory from "./HistoryMed"
export default {
  components:{
    'medic-history':medHistory,
  },
  data(){
    return{
      medic:[]
    }
  }
}
</script>

<style>

</style>
