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
  @media all and (max-width: 800px) {
     grid-template-columns: 1fr;
  }
}

.card {
  display: flex;
  background: #2c3e50;
  border-radius: 1rem;
  & > div {
    padding: 1rem;
  }
  img {
    height: 10rem;
    border-radius: 1rem 0 0 1rem;
  }
  h2, p {
    color: azure;
    text-align: left;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }
}
.status-Dead {
  &::before {
    content: "";
    width: 0.6rem;
    height: 0.6rem;
    background: lightcoral;
    border-radius: 50%;
    margin-right: 0.5rem;
    display: inline-block;
  }
}
.status-Alive {
  &::before {
    content: "";
    width: 0.6rem;
    height: 0.6rem;
    background: rgb(48, 189, 90);
    border-radius: 50%;
    margin-right: 0.5rem;
    display: inline-block;
  }
}

.status-unknown {
  &::before {
    content: "";
    width: 0.6rem;
    height: 0.6rem;
    background: #ffb950;
    border-radius: 50%;
    margin-right: 0.5rem;
    display: inline-block;
  }
}
</style>
