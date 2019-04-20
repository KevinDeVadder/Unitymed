<template>
    <div class="boxes">
        <div class="box" id="box1"><p>See medical history</p></div>
        <div class="box" id="box2"><p>I have a problem</p></div>
        <div class="box" id="box3"><p>Find a check-up doctor</p></div>
    </div>
</template>

<script>
export default {

}
</script>


<style>
    .boxes{
        display: flex;
        flex-direction: row;
    }
    .box{
        display: flex;
        align-items: center;
        width: 33vw;
        border-left:grey solid 2px;
        border-bottom:grey solid 1px;
        height: 100vh;
        color: white;
        font-size: 5vw;
        cursor: pointer;

    }
    
    
    #box1:hover{
        background-image: url("../assets/box-1copy.jpg");
    }
   #box2:hover{
        background-image: url("../assets/Component-2copy.png");
    }
    #box3:hover{
          background-image: url("../assets/Component-3copy.png");
    }




    @media screen and (min-width:900px) {
       #box1{
              background-image: url("../assets/box-1.jpg");
              background-size: 45vw 100vh;
        }
       #box2{
              background-image: url("../assets/Component-2.png");
              background-size: 45vw 100vh;
        }
        #box3{
              background-image: url("../assets/Component-3.png");
              background-size: 45vw 100vh;
        }
    }
    @media screen and (max-width:900px) {
        .boxes{
            flex-direction: column;
        }
        .box{

            align-items: center;
            justify-content: center;
            height: 33vh;
            width: 100%;
            background-color:#66BB6A;
            margin: 5px auto;
        }
       p{
           font-size: 2em;
          color: white;
          margin: 0;
        }
        .nav{
            color: black;
        }
    }
</style>
