<template>
  <div>
    <h1>Episodes</h1>
  </div>
  <ul>
    <li v-for="episode in episodes" :key="episode.id">
      {{episode.name}} - {{episode.episode}} - {{episode.air_date}}
    </li>
  </ul>
</template>

<script>
import { request as fetchGQL } from "graphql-request";
import { ref } from "vue";
export default {
  setup(){
    let episodes = ref([]);
    fetchGQL("https://rickandmortyapi.com/graphql/", /* GraphQL */ `
      query {
        episodes {
          info {
            count 
            pages 
            next
            prev
          } 
          results {
            id
            name
            air_date
            episode
            created
          }
        }
      }
      `
      ).then(data => {
          episodes.value = data.episodes.results;
      });

      return {
        episodes,
      };
    },
  };
</script>