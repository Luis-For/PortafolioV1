<template>
  <div class="animated-background" ref="background">
    <!-- Las figuras se generarán dinámicamente -->
    <div 
      v-for="(shape, index) in shapes" 
      :key="index"
      :class="['shape', `shape-${shape.type}`]"
      :style="shape.style"
    ></div>
  </div>
</template>

<script>
export default {
  name: 'AnimatedBackground',
  data() {
    return {
      shapes: [],
      colors: [
        '#3a86ff', '#8338ec', '#ff006e', 
        '#fb5607', '#ffbe0b', '#00b4d8',
        '#9d4edd', '#f72585', '#4cc9f0'
      ],
      types: ['circle', 'square', 'triangle']
    }
  },
  mounted() {
    this.generateShapes();
    window.addEventListener('resize', this.handleResize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    generateShapes() {
      const shapesCount = 15; // Número de figuras
      this.shapes = [];
      
      for (let i = 0; i < shapesCount; i++) {
        this.shapes.push(this.createShape());
      }
    },
    createShape() {
      const size = this.randomNumber(20, 80);
      const duration = this.randomNumber(20, 40);
      const delay = this.randomNumber(0, 10);
      
      return {
        type: this.types[Math.floor(Math.random() * this.types.length)],
        style: {
          '--size': `${size}px`,
          '--color': this.colors[Math.floor(Math.random() * this.colors.length)],
          '--duration': `${duration}s`,
          '--delay': `-${delay}s`,
          '--x-start': `${this.randomNumber(0, 100)}%`,
          '--y-start': `${this.randomNumber(0, 100)}%`,
          '--x-end': `${this.randomNumber(0, 100)}%`,
          '--y-end': `${this.randomNumber(0, 100)}%`,
          '--rotation': `${this.randomNumber(0, 360)}deg`
        }
      };
    },
    randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    handleResize() {
      // Regenerar formas al cambiar el tamaño para mantener la responsividad
      this.generateShapes();
    }
  }
}
</script>

<style scoped>
.animated-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1; /* Para que quede detrás del contenido */
  background: linear-gradient(135deg, #1a2980, #26d0ce);
}

.shape {
  position: absolute;
  opacity: 0.7;
  animation: float var(--duration) linear infinite var(--delay);
  transform: 
    translate(var(--x-start), var(--y-start))
    rotate(var(--rotation));
}

.shape-circle {
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  background-color: var(--color);
}

.shape-square {
  width: var(--size);
  height: var(--size);
  background-color: var(--color);
}

.shape-triangle {
  width: 0;
  height: 0;
  border-left: calc(var(--size) / 2) solid transparent;
  border-right: calc(var(--size) / 2) solid transparent;
  border-bottom: var(--size) solid var(--color);
}

@keyframes float {
  0% {
    transform: 
      translate(var(--x-start), var(--y-start))
      rotate(0deg);
  }
  50% {
    transform: 
      translate(var(--x-end), var(--y-end))
      rotate(180deg);
  }
  100% {
    transform: 
      translate(var(--x-start), var(--y-start))
      rotate(360deg);
  }
}
</style>