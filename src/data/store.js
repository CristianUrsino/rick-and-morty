import {reactive} from 'vue';

export const store = reactive({
    title: 'Rick and Morty',
    apiUrl: 'https://rickandmortyapi.com/api/',
    endPoint:{
        character:'character',
        location: 'location',
        episode: 'episode',
    },
    characterList: [],
})