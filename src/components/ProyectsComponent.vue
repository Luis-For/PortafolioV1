<template>
  <section class="pricing-section">
    <h2>Proyectos</h2>
    <p class="subtitle">Estos son mis proyectos que me encuentro realizando</p>

    <div class="carousel-container">
      <button class="carousel-button prev" @click="prevSlide">‹</button>
      
      <div class="card-container" ref="carousel">
        <div
          v-for="(plan, index) in plans"
          :key="index"
          class="card"
          :class="{ 
            popular: plan.popular,
            active: activeIndex === index
          }"
          :style="getCardStyle(index)"
        >
          <img :src="plan.img" :alt="plan.name" />
          <h3>{{ plan.name }}</h3>
          <p class="price">{{ plan.price }}</p>
          <ul>
            <li v-for="(feature, fIndex) in plan.features" :key="fIndex">{{ feature }}</li>
          </ul>
          <button>{{ plan.buttonText }}</button>
        </div>
      </div>
      
      <button class="carousel-button next" @click="nextSlide">›</button>
    </div>

    <div class="carousel-dots">
      <span 
        v-for="(dot, index) in plans" 
        :key="index" 
        :class="{ active: activeIndex === index }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </section>
</template>

<script>
export default {
  name: "PricingSection",
  data() {
    return {
      activeIndex: 2, // Centrar la tarjeta popular inicialmente
      plans: [
        {
          name: "Api",
          img: "https://www.svgrepo.com/show/493518/backpack.svg",
          price: "Free",
          features: ["Basic Support", "5 Projects", "Community Access"],
          buttonText: "Get Started",
          popular: false,
        },
        {
          name: "Basic",
          img: "https://github.com/JosCariDe/spring-microservices",
          price: "$9 / month",
          features: ["Priority Support", "15 Projects", "Team Access"],
          buttonText: "Subscribe",
          popular: false,
        },
        {
          name: "API de microservicios",
          img: "https://www.svgrepo.com/show/493527/travel-bag.svg",
          price: "$Description",
          features: ["24/7 Support", "Unlimited Projects", "Analytics Dashboard"],
          buttonText: "Join Now",
          popular: true,
        },
        {
          name: "Team",
          img: "https://www.svgrepo.com/show/493520/military-bag.svg",
          price: "$39 / month",
          features: ["Team Collaboration", "Custom Workflows", "API Access"],
          buttonText: "Get Access",
          popular: false,
        },
        {
          name: "Enterprise",
          img: "https://www.svgrepo.com/show/493516/suitcase.svg",
          price: "Custom",
          features: ["Dedicated Manager", "SLAs & Contracts", "Onboarding Help"],
          buttonText: "Contact Us",
          popular: false,
        },
      ],
    };
  },
  methods: {
    nextSlide() {
      this.activeIndex = (this.activeIndex + 1) % this.plans.length;
    },
    prevSlide() {
      this.activeIndex = (this.activeIndex - 1 + this.plans.length) % this.plans.length;
    },
    goToSlide(index) {
      this.activeIndex = index;
    },
    getCardStyle(index) {
      const offset = index - this.activeIndex;
      const zIndex = 5 - Math.abs(offset);
      const scale = 1 - Math.abs(offset) * 0.05;
      const translateY = offset === 0 ? (this.plans[index].popular ? -30 : 0) : 0;
      
      return {
        transform: `translateX(${offset * 80}px) translateY(${translateY}px) scale(${scale})`,
        zIndex: zIndex,
        opacity: offset === 0 ? 1 : 0.7 - Math.abs(offset) * 0.2
      };
    }
  }
};
</script>

<style scoped>
.pricing-section {
  background: #0c2d48;
  padding: 60px 20px;
  text-align: center;
  color: white;
  overflow: hidden;
  position: relative;
}

.pricing-section h2 {
  font-size: 2.5rem;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.1rem;
  margin-bottom: 40px;
  color: #cfd9e0;
}

.carousel-container {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 60px auto;
  max-width: 1200px;
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 500px;
  position: relative;
  width: 80%;
  margin: 0 auto;
}

.card {
  position: absolute;
  background: white;
  color: #333;
  border-radius: 16px;
  width: 260px;
  height: 460px;
  padding: 25px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card.popular {
  border: 2px solid #0078d7;
}

.card img {
  width: 64px;
  margin-bottom: 15px;
  align-self: center;
}

.card h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
}

.card .price {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 15px;
  color: #0078d7;
}

.card ul {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
  flex-grow: 1;
}

.card ul li {
  padding: 5px 0;
  border-bottom: 1px solid #eee;
  font-size: 0.95rem;
}

.card button {
  background: #0078d7;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.3s;
}

.card button:hover {
  background: #005fa3;
}

.carousel-button {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s;
}

.carousel-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.carousel-dots {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
}

.carousel-dots span {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s;
}

.carousel-dots span.active {
  background: #0078d7;
  transform: scale(1.2);
}

/* Responsive */
@media (max-width: 768px) {
  .card {
    width: 220px;
    height: 420px;
    padding: 15px;
  }
  
  .card-container {
    height: 450px;
  }
}
</style>