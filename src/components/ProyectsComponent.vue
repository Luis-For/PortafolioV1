<template>
  <section class="pricing-section">
    <h2>Proyectos</h2>
    <p class="subtitle">Estos son mis proyectos que me encuentro realizando</p>

    <div class="card-container">
      <div
        v-for="(plan, index) in plans"
        :key="index"
        class="card"
        :class="{ popular: plan.popular }"
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
  </section>
</template>

<script>
export default {
  name: "PricingSection",
  data() {
    return {
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
};
</script>

<style scoped>
/* Aquí puedes agregar estilos similares a los originales */
.pricing-section {
  background: #0c2d48;
  padding: 60px 20px;
  text-align: center;
  color: white;
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

.card-container {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 0;
  position: relative;
  margin-top: 60px;
}

/* Igualar tamaño de todas las tarjetas */
.card {
  position: relative;
  background: white;
  color: #333;
  border-radius: 16px;
  width: 260px;           /* tamaño uniforme */
  height: 460px;          /* altura fija */
  padding: 25px;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, z-index 0.3s ease;
  margin: 0 -40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Control de capas para superposición */
.card-container .card:nth-child(1),
.card-container .card:nth-child(5) {
  z-index: 1;
}

.card-container .card:nth-child(2),
.card-container .card:nth-child(4) {
  z-index: 2;
}

.card-container .card:nth-child(3) {
  z-index: 3;
}

/* Hover solo para tarjetas normales */
.card:not(.popular):hover {
  transform: translateY(-10px) scale(1.03);
  z-index: 4;
}

/* Tarjeta destacada */
.card.popular {
  transform: translateY(-30px) scale(1.05);
  border: 2px solid #0078d7;
}

/* Imagen, título, precio, lista, botón */
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
}


</style>
