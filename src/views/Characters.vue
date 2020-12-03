<template>
  <div>
    <h1 class="title">Characters</h1>
  </div>
    <div class="card-container">
      <div v-for="character in characters" :key="character.id" class="card">
        <img :src="character.image">
        <div>
          <h2>{{character.name}}</h2>
          <p>{{character.status}} - {{character.species}}</p>
        </div>
      </div>
    </div>
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
