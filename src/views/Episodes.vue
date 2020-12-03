<template>
  <div>
    <h1 class="title">Episodes</h1>
  </div>
  <div class="card-container">
    <div v-for="episode in episodes" :key="episode.id" class="card">
      <div>
        <h2>{{episode.name}}</h2>
        <p>{{episode.episode}}</p>
        <p>{{episode.air_date}}</p>
      </div>
    </div>
  </div>
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