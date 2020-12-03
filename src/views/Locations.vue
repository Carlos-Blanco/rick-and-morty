<template>
  <div>
    <h1 class="title">Locations</h1>
  </div>
  <div class="card-container">
      <div v-for="location in locations" :key="location.id" class="card">
        <div>
          <h2>{{location.name}}</h2>
          <p>{{location.type}} - {{location.dimension}}</p>
        </div>
      </div>
  </div>
</template>

<script>
import { request as fetchGQL } from "graphql-request";
import { ref } from "vue";
export default {
  setup(){
    let locations = ref([]);

    fetchGQL("https://rickandmortyapi.com/graphql/", /* GraphQL */ `
      query {
        locations {
          info {
            count 
            pages 
            next
            prev
          } 
          results {
            id
            name
            type
            dimension
          }
        }
      }
      `
      ).then(data => {
          locations.value = data.locations.results;
      });

      return {
        locations,
      };
    },
  };
</script>