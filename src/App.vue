<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/reglamento">Reglamento</router-link>
      <router-link to="/clubs">Clubs</router-link>
      <router-link to="/oficina-central">Oficina central</router-link>
      <router-link to="/calendario">Calendario</router-link>
      <router-link to="/ligapbk">Liga PBK</router-link>
      <router-link to="/pbkchampions">PBK Champions</router-link>
      <router-link to="/pbkopa">PBKopa</router-link>
      <router-link to="/gratificaciones">Gratificaciones</router-link>
    </div>
    <router-view/>
    
<!-- Añadido para components -->
      <Header/>
  </div>
</template>

// Añadido para components
<script>

import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  display: flex;
  background-size: 100%;
  background-color: black;
}

#nav {
  width: 15rem; /* Set the width of the sidebar */
  height: 20rem;
  position: fixed; /* Fixed Sidebar (stay in place on scroll) */
  top: 6rem; /* Stay at the top */
  left: 0;
  background-color: rgb(124, 124, 124); /* Black */
  overflow-x: hidden; /* Disable horizontal scroll */
}

#nav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: rgb(230, 209, 28);
  display: block;
}

#nav a:hover {
    color: #000000;
}
</style>
