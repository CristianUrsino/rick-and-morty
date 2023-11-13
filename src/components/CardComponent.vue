<template>
    <div>
        <figure><img :src="img" alt="img"></figure>
        <h5>nome: {{ name }}</h5>
        <div>status: {{ status }}</div>
        <div>species: {{ species }}</div>
    </div>
</template>

<script>
export default{
    name:'CardComponent',
    props:{
        img:String,
        name:String,
        status:String,
        species:String,
    },
    data(){
        return{
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>
