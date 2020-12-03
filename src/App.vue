<template>
  <div id="nav">
    <router-link to="/characters">Characters</router-link> |
    <router-link to="/episodes">Episodes</router-link> |
    <router-link to="/locations">Locations</router-link>
  </div>
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.title {
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: bold;
}

.card-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 0 2rem;
}

.card {
  display: flex;
  background: #2c3e50;
  border-radius: 1rem;
  img {
    margin-right: 1rem;
    height: 10rem;
    border-radius: 1rem 0 0 1rem;
  }
  h2, p {
    color: azure;
    text-align: left;
    margin-top: 1rem;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
</style>
