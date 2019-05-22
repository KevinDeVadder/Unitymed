<template>
<div>
  <add-admin/>
  <doctor-table/>
  <users-table/>
</div>
</template>
<script>
import addAdmin from './addAdmin'
import doctorTable from './doctorTable'
import usersTable from './usersTable'

export default {
    data(){
        return{
        }
    },
    components:{
      addAdmin,
      doctorTable,
      usersTable
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
