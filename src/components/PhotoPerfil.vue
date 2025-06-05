<template>
  <section class="hero">
    <div class="hero-content">
      <div class="text">
        <h1>HOLA MUNDO!</h1>
        <p>
          Soy <strong>Luis Ángel Fornaris Rodríguez</strong>, desarrollador full-stack con pasión por construir soluciones web eficientes.
          Bienvenido a mi portafolio, donde comparto mis proyectos, habilidades y el camino que estoy construyendo en el mundo del desarrollo.
        </p>
      </div>
      <div class="photo">
        <img src="../assets/oZmI3HE1IrxwMJIqZO2lS-transformed.png" alt="Mi foto" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: stretch; /* ❗ Esto hace que los hijos tengan la misma altura que el contenedor */
  flex-wrap: wrap;
  gap: 1rem; /* Separación lateral */
}

/* Flex layout */
.hero-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end; /* 🔧 alinea la imagen con el borde inferior */
  flex-wrap: wrap;
}

/* Texto más grande */
.text {
  flex: 1;
  min-width: 280px;
  max-width: 600px;
}

.text h1 {
  font-size: 3rem; /* 🔧 Aumenta el tamaño del título */
  margin-bottom: 1rem;
}

.text p {
  font-size: 1.25rem; /* 🔧 Aumenta el tamaño del párrafo */
  line-height: 1.6;
}

/* Imagen */
.photo {
  display: flex;
  align-items: flex-end;
}

.photo img {
  width: 320px;
  height: 100%; /* 👈 Forzamos que la imagen se alinee verticalmente al fondo */
  object-fit: cover; /* 👌 Que no se deforme, solo recorte si es necesario */
  margin: 0;
  padding: 0;
  align-self: flex-end; /* 👈 Baja la imagen hasta el fondo */
}
/* Responsivo */
@media (max-width: 768px) {
  .hero-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .photo img {
    width: 220px;
    margin-top: 1rem;
  }
}
</style>
