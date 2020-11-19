<template>
  <div class="about">
    <h1>Locations</h1>
  </div>
</template>

<script>
import { request as fetchGQL } from "graphql-request";
export default {
  setup(){
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
          console.log(data);
      });
    },
  };
</script>