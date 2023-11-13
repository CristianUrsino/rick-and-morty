<template>
    <header>
       <h1 class="text-center py-3">{{ store.title }}</h1> 
    </header>
</template>

<script>
import { store } from "../data/store";
export default{
    name:'HeaderComponent',

    data(){
        return{
            store
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>
