<template>
  <div class="cards-wrapper">
    <div class="cards-container">
      <div v-for="(card, index) in cards" :key="index" class="card">
        <div class="card-content">
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
          <button @click="goToProject(card.url)" class="project-button">
            Ver proyectos
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardsComponent',
  data() {
    return {
      cards: [
        {
          title: "Portafolio Web",
          description: "Sitio web personal mostrando mis proyectos recientes",
          url: "https://github.com/Luis-For/PortafolioV1"
        },
        {
          title: "Api de microservicios",
          description: "Aplicación realizada en java y spring con microservicios",
          url: "https://github.com/JosCariDe/spring-microservices"
        },
        {
          title: "Aplicación de futbol",
          description: "App de productividad para iOS y Android con sincronización en la nube",
          url: "https://github.com/Luis-For/Api-futbol"
        },
        {
          title: "MorphoKey",
          description: "App de clasificación de animales por medio de claves taxonomicas",
          url: "https://github.com/Luis-For/MorphoKey-ui-backend"
        },
        {
          title: "Base de datos SQL",
          description: "App de productividad para iOS y Android con sincronización en la nube",
          url: "https://github.com/Luis-For/UEFA-Champions-League-SQL"
        },
        {
          title: "Base de datos ",
          description: "App de productividad para iOS y Android con sincronización en la nube",
          url: "https://ejemplo.com/app"
        }
      ]
    }
  },
  methods: {
    goToProject(url) {
      if (url) {
        window.open(url, '_blank');
      }
    },
    addCard(newCard) {
      if (newCard && newCard.title && newCard.description && newCard.url) {
        this.cards.push(newCard);
        // Forzar reflow para suavizar la animación de añadir nueva carta
        this.$nextTick(() => {
          const container = this.$el.querySelector('.cards-container');
          container.style.transition = 'none';
          void container.offsetHeight; // Trigger reflow
          container.style.transition = '';
        });
      }
    }
  }
}
</script>

<style scoped>
/* Contenedor principal que previene desbordamientos */
.cards-wrapper {
  width: 100%;
  overflow-x: hidden;
  padding: 10px 0;
}

/* Contenedor de cartas con scroll horizontal en móviles */
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
  padding: 15px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  transition: all 0.3s ease;
}

/* Estilos de carta */
.card {
  border: none;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 82, 204, 0.1);
  transition: all 0.3s ease;
  background: white;
  min-width: 0; /* Previene desbordamiento de texto */
  break-inside: avoid; /* Evita que las cartas se corten en columnas */
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 16px rgba(0, 82, 204, 0.15);
}

.card-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
}

.card-content h3 {
  margin-top: 0;
  color: #0052cc;
  font-size: 1.3rem;
  margin-bottom: 12px;
  border-bottom: 2px solid #e6f0ff;
  padding-bottom: 8px;
  word-break: break-word;
}

.card-content p {
  color: #5e6c84;
  margin-bottom: 20px;
  line-height: 1.5;
  flex-grow: 1;
  word-break: break-word;
  overflow-wrap: break-word;
}

.project-button {
  background-color: #0052cc;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
  width: 100%;
  letter-spacing: 0.5px;
  margin-top: auto;
}

.project-button:hover {
  background-color: #0065ff;
  box-shadow: 0 4px 8px rgba(0, 82, 204, 0.2);
}

.project-button:active {
  transform: scale(0.98);
}

/* Responsividad mejorada */
@media (max-width: 1200px) {
  .cards-container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
}

@media (max-width: 992px) {
  .cards-container {
    padding: 10px;
  }
}

@media (max-width: 768px) {
  .cards-container {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 15px;
  }
  
  .card-content {
    padding: 15px;
  }
  
  .card-content h3 {
    font-size: 1.2rem;
  }
}

@media (max-width: 576px) {
  .cards-wrapper {
    padding: 5px 0;
  }
  
  .cards-container {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    padding: 10px 5px;
    gap: 10px;
    -webkit-overflow-scrolling: touch; /* Para scroll suave en iOS */
  }
  
  .cards-container::-webkit-scrollbar {
    height: 5px;
  }
  
  .cards-container::-webkit-scrollbar-thumb {
    background: #0052cc;
    border-radius: 5px;
  }
  
  .card {
    flex: 0 0 85%;
    scroll-snap-align: start;
  }
  
  .project-button {
    padding: 8px 12px;
    font-size: 13px;
  }
}

@media (max-width: 400px) {
  .card {
    flex: 0 0 90%;
  }
}
</style>