<template>
    <div>
     <h2 class="title">{{message}}</h2><Csa></Csa>
    </div>
    
</template>

<script>
import Csa from './Csa.vue'
export default {
    name:'App',
    components:{
        Csa
    },
    data(){
        return{
            message:"Hello Webpack???"
        }
    }
}
</script>
 
<style>
    .title {
        color:green;
    }
</style>
