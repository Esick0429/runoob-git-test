<template>
    <h2 class="head">{{message}}</h2>
</template>

<script>
export default {
    name:"Csa",
    data(){
        return{
            message:"你说呢？发病了？"
        }
    }
}
</script>

<style scoped>
.head{
    color: greenyellow;
}
</style>