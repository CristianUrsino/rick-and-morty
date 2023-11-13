<template>
  <HeaderComponent/>
  <div class="container-fluid">
    <div class="row">
            <div v-for="(character, index) in store.characterList" :key="character.id" class="col-3 p-3 my-card">
                <CardComponentVue 
                :img="character.image"
                :status="character.status"
                :name="character.name"
                :species="character.species"
                />
            </div>
        </div>
    </div>

    <div class="text-center py-3">found: {{ store.characterList.length}} character</div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import { store } from "./data/store";
import axios from 'axios';
import CardComponentVue from "./components/CardComponent.vue";
export default {
    name: 'App',
    components:{
        HeaderComponent,
        CardComponentVue,
    },
    data(){
        return{
            store
        }
    },
    methods:{
        change(){
            this.store.title= 'new title'
        },
        getCharacters(){
            const url = store.apiUrl + store.endPoint.character;
            axios.get(url).then((response)=>{
                store.characterList = response.data.results;
                console.log(store.characterList);
            });
        }
    },
    created(){
        this.getCharacters();
    }
}
</script>

<style lang="scss" scoped>
  
</style>
