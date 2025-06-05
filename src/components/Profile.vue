<template>
  <div class="profile-container">
    <div class="sidebar">
      <img class="profile-pic" src="../assets/oZmI3HE1IrxwMJIqZO2lS-transformed.png" alt="Luis Fornaris">
      <h2 class="name">Luis Ángel<br>Fornaris Rodríguez</h2>
      <div class="divider"></div>
      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    <div class="main-content">
      <h1>Hola Mundo!</h1>
      <h2>Desarrollador full-stack</h2>
      <div class="buttons">
        <button class="btn-primary" @click="downloadCV">CURRICULUM</button>
        <button class="btn-outline">PROYECTOS</button>
      </div>
      <p>
        desarrollador full-stack con pasión por construir soluciones web eficientes.
        Bienvenido a mi portafolio, donde comparto mis proyectos, habilidades y el camino que estoy construyendo 
        en el mundo del desarrollo.
      </p>
      <p>
        Aquí puedes contar tu historia y permitir que tus usuarios sepan más sobre ti.
      </p>
    </div>
  </div>
</template>
<script>
export default{
    name:'ProfileView',
      methods: {
    downloadCV() {
      const cvUrl = '../assets/docs/Luis Angel Fornaris Rodriguez - Full Stack Developer.pdf'; 
      
      // Crear un enlace temporal
      const link = document.createElement('a');
      link.href = cvUrl;
      link.setAttribute('download', 'LuisF_Curriculum.pdf');
      document.body.appendChild(link);
      
      // Simular click
      link.click();
      
      // Limpiar
      document.body.removeChild(link);
    }
  }
}

</script>
<style scoped>
.profile-container {
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  font-family: 'Segoe UI', sans-serif;
  color: #333;
}

.sidebar {
  width: 35%;
  background-color: #f3eae3;
  padding: 40px 20px;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-pic {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
  background-color: #666;
}

.name {
  font-size: 24px;
  font-weight: 700;
  margin: 10px 0 5px;
}

.divider {
  width: 40px;
  height: 2px;
  background-color: #0047ff;
  margin: 10px 0;
}

.title {
  letter-spacing: 2px;
  font-size: 14px;
  color: #666;
  margin-bottom: 30px;
}

.social-icons {
  display: flex;
  gap: 15px;
  justify-content: center;
  margin-top: auto;
}

.social-icons a {
  color: #000;
  font-size: 18px;
  text-decoration: none;
  transition: color 0.3s;
}

.social-icons a:hover {
  color: #0047ff;
}

.main-content {
  width: 65%;
  padding: 40px;
  box-sizing: border-box;
}

.main-content h1 {
  font-size: 60px;
  font-weight: 800;
  margin-bottom: 10px;
}

.main-content h2 {
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 30px;
}

.buttons {
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  justify-content: center;
}

.btn-primary {
  background-color: #0047ff;
  color: white;
  padding: 10px 20px;
  border: none;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
}

.btn-outline {
  background-color: white;
  color: black;
  padding: 10px 20px;
  border: 2px solid black;
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
}

.main-content p {
  font-size: 15px;
  line-height: 1.6;
  margin-bottom: 15px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .profile-container {
    flex-direction: column;
    padding: 0 10px;
  }

  .sidebar, .main-content {
    width: 100%;
    padding: 30px 20px;
  }

  .main-content h1 {
    font-size: 40px;
    text-align: center;
  }

  .main-content h2 {
    font-size: 18px;
    text-align: center;
  }

  .main-content p {
    text-align: center;
  }
}

</style>

