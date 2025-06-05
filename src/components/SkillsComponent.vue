<template>
  <section class="hero-section">
    <!-- Sección superior -->
    <div class="hero-content">
      <h1>Skills</h1>
    </div>

    <!-- Componente flotante -->
    <div class="floating-box">
      <h2>How it works</h2>
      <p>Travel, collect, be rewarded. It's that simple!</p>
      <div class="steps">
        <!-- Iconos o columnas -->
         <h2>Tecnologías</h2>

            <h3>Frontend</h3>
            <ul class="skillFront">
                <li><img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML" /></li>
                <li><img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS" /></li>
                <li><img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" /></li>
                <li><img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=vue.js&logoColor=white" alt="Vue.js" /></li>
                <li><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" /></li>
            </ul>

            <h3>Backend</h3>
            <ul class="skillBack">
                <li><img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="Node.js" /></li>
                <li><img src="https://img.shields.io/badge/Java-007396?style=flat-square&logo=java&logoColor=white" alt="Java" /></li>
                <li><img src="https://img.shields.io/badge/SpringBoot-6DB33F?style=flat-square&logo=spring&logoColor=white" alt="Spring Boot" /></li>
                <li><img src="https://img.shields.io/badge/Nest.js-E0234E?style=flat-square&logo=nestjs&logoColor=white" alt="Nest.js" /></li>
            </ul>

            <h3>Bases de datos y más</h3>
            <ul class="skillMore">
                <li><img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white" alt="PostgreSQL" /></li>
                <li><img src="https://img.shields.io/badge/SQL_Server-CC2927?style=flat-square&logo=microsoftsqlserver&logoColor=white" alt="SQL Server" /></li>
                <li><img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white" alt="Docker" /></li>
                <li><img src="https://img.shields.io/badge/Azure-0078D4?style=flat-square&logo=microsoftazure&logoColor=white" alt="Microsoft Azure" /></li>
            </ul>
      </div>
    </div>
  </section>
</template>

<script>
    export default{
        name:'skillComponent'
    }
</script>

<style scoped>


.hero-section {
  background: #ffffff;
  position: relative;
  padding-bottom: 80px; /* Espacio para la caja flotante */
  color: black;
}

.hero-content {
  text-align: center;
  padding: 40px 100px;
  margin: 0;
}

.floating-box {
  border: solid rgb(182, 182, 182) 2px;
  width: 90%;
  max-width: 900px;
  margin: 40px auto; /* Agrega espacio vertical */
  background: rgb(243, 242, 242);
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}
</style>
