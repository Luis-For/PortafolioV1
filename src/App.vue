<template>
  <div id="app">
    <router-view></router-view> <!-- Contenido de las rutas-->
  </div>
</template>

<script>


//import { RouterView } from 'vue-router';
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
