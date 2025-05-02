<template>
    <div>
        <!-- Barra de tareas-->
        <div class="header">
            <header><NavBar/></header>
        </div>

        <!--Seccion principal-->
        <section class="hero-description" aria-label="Presentación de Luis Ángel Fornaris">
            <PhotoPerfil/>
            <p class="title">HOLA MUNDO!</p>
            <p class="intro">
                Soy <strong>Luis Ángel Fornaris Rodríguez</strong>, <span class="highlight">desarrollador full-stack</span>
                con pasión por construir soluciones web eficientes.
                <br>Bienvenido a mi portafolio, donde comparto mis proyectos, habilidades <br>y el camino que estoy construyendo en el mundo del desarrollo.
            </p>
        </section>
        <section class="Skills">
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
            </section>
        <!--Cards of proyects-->
        <div class="proyectos">
            <section>
                <h3><strong> Proyectos realizados</strong></h3>
                <ul class="lista">
                    <li>
                        <CardProyect
                        titulo="Base de datos SQL champions box-sizing: border-box;box-sizing: border-box;box-sizing: border-box;"
                        descripcion="no se"
                        extra="ssss"
                        />
                    </li>
                    <li>
                        <CardProyect
                        titulo="HOla"
                        descripcion="no se"
                        extra="ssss"
                        />
                    </li>
                    <li>
                        <CardProyect
                        titulo="HOla"
                        descripcion="no se"
                        extra="ssss"
                        />
                    </li>
                </ul>
            </section>
        </div>

        <!-- pie de pagina-->
         <footer class="EndPage">   
            <section>
                <ul class="redes-sociales">
                    <li>
                        <a href="https://github.com/tu-usuario" target="_blank">
                        <img src="https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white" alt="GitHub" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/tu-usuario" target="_blank">
                        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn" />
                        </a>
                    </li>
                    <li>
                        <a href="mailto:tuemail@ejemplo.com">
                        <img src="https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white" alt="Email" />
                        </a>
                    </li>
                </ul>
            </section>
         </footer>

    </div>
</template>

<script>
import CardProyect from '../components/CardProyect.vue';
import NavBar from '../components/NavBar.vue';
import PhotoPerfil from '../components/PhotoPerfil.vue';

    export default{
        name: 'HomeView',
        methods: {  //metodo botton
            goToProjects() {
            this.$router.push('/projects'); // así navegas a la ruta "projects"
            }
        },
        components:{
            NavBar,
            PhotoPerfil,
            CardProyect
        }
    }
</script>

<style>
.header{
    position: absolute;
    top: -80px;
    background-color: #1B1F24;
}

.hero-description{
    color: #2c3e50;
    position: relative;
    border-bottom: 2px solid gray;
    background-color: #e2eff8;
    padding: 2%;
    /*background-color: ;*/
}
.title{
    font-family: sans-serif;
    color: #2c3e50;
    position: absolute;
    left: 3%;
    top: 3%;
    font-size: 3rem;
}
.intro{
    position: absolute;
    text-align: justify;
    left: 3%;
    top: 23%;
    font-size: 1.4rem;
}
.Skills{
    color: white;
    background-color: #232B35;
    padding: 1%;
}
.Skills ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
    padding: 5px;
}

.Skills li {
  display: flex;
  align-items: center;
}

.Skills img{
    width: 100px;
    height: 40px;
}

.proyectos{
    background-color: #232B35;
    padding: 1%;
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
}
.proyectos ul{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    padding: 2%;
}

.proyectos li{
    top: 100%;
    right: 100%;
}

.EndPage{
    padding: 2%;
    color: #232B35;
    background-color: #00000000;
}
</style>