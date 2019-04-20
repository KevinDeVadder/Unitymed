<template>
  <div>
    <medic v-for="medic in medicList" :key="medic._id" :medic="medic"></medic>
  </div>
</template>

<script>
import Medic from "./Medic"
import UserService from '@/services/UserService'

export default {
  components:{
    'medic':Medic,
  },
  data(){
    return{
      medicList: []

    }
  },
  async mounted() {
    this.medicList = (await UserService.getAllMedics({specialization: this.$route.query.specialist})).data
    console.log(this.medicList)
  },
}
</script>

<style>

</style>
