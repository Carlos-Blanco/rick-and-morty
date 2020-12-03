<template>
  <div>
    <h1>Characters</h1>
  </div>
  <ul>
    <li v-for="character in characters" :key="character.id">
      <img :src="character.image">
      {{character.name}} - {{character.status}} - {{character.species}}
    </li>
  </ul>
</template>

<script>
import { request as fetchGQL } from "graphql-request";
import { ref } from "vue";
export default {
  setup(){
    let characters = ref([]);
    fetchGQL("https://rickandmortyapi.com/graphql/", /* GraphQL */ `
      query {
        characters {
          info {
            count 
            pages 
            next
            prev
          } 
          results {
            id
            name
            status
            species
            gender
            image
          }
        }
      }
      `
      ).then(data => {
          characters.value = data.characters.results;
      });

      return {
        characters,
      };
    },
  };
</script>
