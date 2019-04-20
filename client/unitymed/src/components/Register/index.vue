<template>
    <div>
<component :is="type" v-if="type"/>
<div class="box" v-if="!type">      
    <h1>What is your purpose?</h1>
    <div class="buttons">
          <span @click="type = 'med-reg'">Medic</span>
          <span @click="type = 'pat-reg'">Patient</span>
    </div>
</div> 
    </div>
</template>

<script>
import medReg from "./MedicRegister"
import patReg from "./PatientRegister"

export default {
    components:{
        'med-reg': medReg,
        'pat-reg': patReg
    },
    data(){
        return{
          type:''       
         }
    }
}
</script>

<style scoped>
    h1{
        margin-bottom: 7vh;
        margin-top: 10vh;
    }
    span{
        background-color: #43A047;
        padding: 5vh 0 5vh 0;
        border-radius: 0.5em;
        margin-bottom: 6vh;
        font-size: calc(3em);
        color: white;
        cursor: pointer
    }
    .buttons{
        display: flex;
        flex-direction: column;
        margin: 0 20vw 0 20vw
    }

</style>
