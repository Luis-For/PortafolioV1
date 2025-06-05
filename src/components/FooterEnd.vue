<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="footer-quote">"Si el código no te hace reír, es que no lo he optimizado todavía. 😉"</p>
      <div class="footer-links">
        <a href="mailto:luisfor90@gmail.com" class="footer-link">📧 luisfor90@gmail.com</a>
        <a href="https://github.com/tuperfil" target="_blank" class="footer-link">💻 GitHub</a>
        <a href="https://linkedin.com/in/tuperfil" target="_blank" class="footer-link">🔗 LinkedIn</a>
      </div>
      <p class="footer-cta">¿Listo para crear algo increíble juntos? <strong>¡Hablemos!</strong></p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterPortfolio'
}
</script>

<style scoped>
.footer {
  background-color: #1A1A1A; /* Fondo oscuro elegante */
  color: #F0F0F0;
  padding: 3rem 1rem;
  text-align: center;
  border-top: 1px solid #3498DB; /* Línea superior azul como acento */
  padding: auto;
}

.footer-content {
  max-width: 800px;
  margin: 0 auto;
}

.footer-quote {
  font-style: italic;
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #3498DB; /* Azul para destacar la frase */
}

.footer-links {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
}

.footer-link {
  color: #F0F0F0;
  text-decoration: none;
  transition: color 0.3s;
  font-size: 1rem;
}

.footer-link:hover {
  color: #1ABC9C; /* Turquesa al hover */
}

.footer-cta {
  font-size: 1.1rem;
  margin-top: 1rem;
}

.footer-cta strong {
  color: #E67E22; /* Naranja para el llamado a la acción */
}
</style>