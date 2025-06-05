<template>
  <footer class="footer">
    <div class="footer-content">
      <h2 class="footer-title">Contáctame</h2>
      <p class="footer-text">¿Listo para colaborar? Envíame un correo:</p>
      <a href="mailto:luisfor90@gmail.com" class="footer-email">luisfor90@gmail.com</a>
      <button class="footer-button" @click="scrollToTop">JOIN NOW</button>
    </div>
  </footer>
</template>

<script>
export default {
    name: 'footerComponent',
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
.footer {
  background-color: #296284; /* Azul oscuro como en la paleta anterior */
  color: white;
  padding: 3rem 1rem;
  text-align: center;
}

.footer-content {
  max-width: 600px;
  margin: 0 auto;
}

.footer-title {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.footer-text {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  opacity: 0.9;
}

.footer-email {
  display: block;
  color: #3498DB; /* Azul eléctrico para el enlace */
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-email:hover {
  color: #1ABC9C; /* Turquesa al hover */
}

.footer-button {
  background-color: #E67E22; /* Naranja llamativo como en el ejemplo */
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.footer-button:hover {
  background-color: #D35400; /* Naranja más oscuro al hover */
}
</style>