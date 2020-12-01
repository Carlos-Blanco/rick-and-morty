<template>
  <div>
    <h1>Locations</h1>
  </div>
  <ul>
    <li v-for="location in locations" :key="location.id">
      {{location.name}} - {{location.type}} - {{location.dimension}}
    </li>
  </ul>
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