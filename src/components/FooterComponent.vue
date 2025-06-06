<template>
  <footer class="footer">
    <div class="footer-content">
      <h2 class="footer-title">Contáctame</h2>
      <p class="footer-text">¿Listo para colaborar? Envíame un correo:</p>
      <a href="mailto:luisfor90@gmail.com" class="footer-email">luisfor90@gmail.com</a>
      <button class="footer-button" @click="scrollToTop">JOIN NOW</button>
    </div>
    <img class="footer-image" src="../assets/fotoanimate.webp" alt="Foto de contacto"/>
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
  background-color: #296284;
  color: white;
  padding: 3rem 1rem;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  overflow: hidden;
}

.footer-content {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  z-index: 2;
}

.footer-image {
  position: absolute;
  right: 5%;
  bottom: 0;
  height: 100%;
  max-height: 300px;
  object-fit: contain;
  object-position: bottom center;
  z-index: 1;
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
  color: #3498DB;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-email:hover {
  color: #1ABC9C;
}

.footer-button {
  background-color: #E67E22;
  color: white;
  border: none;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  position: relative;
  z-index: 2;
}

.footer-button:hover {
  background-color: #D35400;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer {
    flex-direction: column;
    align-items: center;
    padding-bottom: 200px;
  }
  
  .footer-image {
    position: absolute;
    height: auto;
    width: 80%;
    max-height: 200px;
    right: 50%;
    transform: translateX(50%);
    bottom: 20px;
  }
  
  .footer-content {
    margin-bottom: 2rem;
  }
}

@media (max-width: 480px) {
  .footer-title {
    font-size: 1.5rem;
  }
  
  .footer-text, .footer-email {
    font-size: 1rem;
  }
  
  .footer-image {
    max-height: 150px;
  }
}
</style>