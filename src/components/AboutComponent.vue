<template>
  <div class="landing-container">
    <div class="landing-content">
      <div class="text-section">
        <h1>Create amazing landing pages with globing template</h1>
        <p class="description">
          It is a long established fact that a reader will be distracted by the readable content 
          of a page when looking at its layout. The point of using Lorem Ipsum is that it has 
          a more-or-less normal distribution.
        </p>
        
        <button class="read-more-btn" @click="toggleContent">
          {{ showFullContent ? 'Ver menos' : 'Ver más' }}
        </button>
        
        <div v-if="showFullContent" class="additional-content">
          <p>Musicians close stronger class, simpler calibration Hicks, learn trends, imperfect diagram.</p>
          <img :src="featureImage" alt="Feature" class="feature-image">
        </div>
      </div>
      
      <div class="image-section">
        <img :src="mainImage" alt="Main product" class="main-image">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      showFullContent: false,
      mainImage: require('../assets/fotoanimate.webp'),
    }
  },
  methods: {
    toggleContent() {
      this.showFullContent = !this.showFullContent;
    }
  }
}
</script>

<style scoped>
.landing-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.landing-content {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
}

.text-section {
  flex: 1;
  text-align: left;
}

.text-section h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: #2c3e50;
  line-height: 1.2;
}

.description {
  font-size: 1.1rem;
  color: #7f8c8d;
  margin-bottom: 30px;
  line-height: 1.6;
}

.read-more-btn {
  background-color: #3498db;
  color: rgb(206, 206, 206);
  border: none;
  padding: 12px 25px;
  font-size: 1rem;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.read-more-btn:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.additional-content {
  margin-top: 20px;
  animation: fadeIn 0.5s ease;
}

.additional-content p {
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 20px;
}

.feature-image {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.image-section {
  flex: 1;
  background-color: #e6e6e6;
}

.main-image {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

/* Responsive Design */
@media (max-width: 992px) {
  .landing-content {
    flex-direction: column;
    gap: 30px;
  }
  
  .text-section, .image-section {
    width: 100%;
  }
  
  .text-section h1 {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .landing-container {
    padding: 30px 15px;
  }
  
  .text-section h1 {
    font-size: 1.8rem;
  }
  
  .description {
    font-size: 1rem;
  }
}

@media (max-width: 480px) {
  .read-more-btn {
    width: 100%;
    padding: 15px;
  }
  
  .text-section h1 {
    font-size: 1.6rem;
  }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>