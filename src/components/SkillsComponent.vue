<template>
  <section class="hero-section">
    <div class="hero-content">
      <h1>🚀 Skills</h1>
      <p class="subtitle">Tecnologías que domino</p>
    </div>

    <div class="floating-box">
      <div class="tech-category">
        <h2>Frontend</h2>
        <div class="badges">
          <img src="https://img.shields.io/badge/Angular-DD0031?style=flat&logo=angular&logoColor=white" alt="Angular" />
          <img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black" alt="React" />
          <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat&logo=vue.js&logoColor=white" alt="Vue.js" />
          <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" alt="HTML5" />
          <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" alt="CSS3" />
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" alt="JavaScript" />
        </div>
      </div>

      <div class="tech-category">
        <h2>Backend</h2>
        <div class="badges">
          <img src="https://img.shields.io/badge/Java-007396?style=flat&logo=java&logoColor=white" alt="Java" />
          <img src="https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat&logo=springboot&logoColor=white" alt="Spring Boot" />
          <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" alt="Node.js" />
          <img src="https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white" alt="NestJS" />
          <img src="https://img.shields.io/badge/Django-092E20?style=flat&logo=django&logoColor=white" alt="Django" />
        </div>
      </div>

      <div class="tech-category">
        <h2>Bases de Datos</h2>
        <div class="badges">
          <img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat&logo=postgresql&logoColor=white" alt="PostgreSQL" />
          <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=mysql&logoColor=white" alt="MySQL" />
          <img src="https://img.shields.io/badge/SQL_Server-CC2927?style=flat&logo=microsoftsqlserver&logoColor=white" alt="SQL Server" />
        </div>
      </div>

      <div class="tech-category">
        <h2>NoSQL</h2>
        <div class="badges">
          <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" alt="MongoDB" />
          <img src="https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white" alt="Redis" />
        </div>
      </div>

      <div class="tech-category">
        <h2>DevOps</h2>
        <div class="badges">
          <img src="https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white" alt="Git" />
          <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub" />
          <img src="https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white" alt="Docker" />
          <img src="https://img.shields.io/badge/Azure-0078D4?style=flat&logo=microsoftazure&logoColor=white" alt="Azure" />
          <img src="https://img.shields.io/badge/AWS-232F3E?style=flat&logo=amazonaws&logoColor=white" alt="AWS" />
        </div>
      </div>

      <div class="tech-category">
        <h2>Análisis de Datos</h2>
        <div class="badges">
          <img src="https://img.shields.io/badge/Power_BI-F2C811?style=flat&logo=powerbi&logoColor=black" alt="Power BI" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillComponent",
};
</script>

<style scoped>
.hero-section {
  background: #fff;
  padding-bottom: 80px;
  color: #333;
  text-align: center;
}

.hero-content {
  padding: 50px 20px 10px;
}

.subtitle {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 30px;
}

.floating-box {
  max-width: 1000px;
  margin: 0 auto;
  background: #f7f7f7;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.tech-category {
  margin-bottom: 30px;
}

.tech-category h2 {
  font-size: 1.4rem;
  color: #2c3e50;
  margin-bottom: 15px;
}

.badges {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.badges img {
  height: 28px;
}
</style>
