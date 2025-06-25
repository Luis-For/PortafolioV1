<template>
  <div id="app">
    <AnimatedBackground />
    <!-- Tu contenido aquí -->
    <div class="content">
      <h1>Mi Página con Fondo Animado</h1>
      <p>Este es un ejemplo de fondo animado con Vue.js</p>
    </div>
  </div>
</template>

<script>
import AnimatedBackground from './components/AnimatedBackground.vue'

export default {
  name: 'App',
  components: {
    AnimatedBackground
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: white;
}

.content {
  position: relative;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semitransparente para mejor legibilidad */
  border-radius: 10px;
  margin-top: 2rem;
}
</style>