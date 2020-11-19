<template>
  <div class="home">
    <h1>Characters</h1>
  </div>
</template>

<script>
import { request as fetchGQL } from "graphql-request";
export default {
  setup(){
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
          }
        }
      }
      `
      ).then(data => {
          console.log(data);
      });
    },
  };
</script>
