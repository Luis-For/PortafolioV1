<template>
    <div class="all">
        <!-- Barra de tareas-->
        <div class="header">
            <header><NavBar/></header>
        </div>
        <!--Hero Section-->
        <section class="hero-description" aria-label="Presentación de Luis Ángel Fornaris">
            <Profile></Profile>
        </section>

        <section class="Skills">
            <SkillsComponent></SkillsComponent>
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
//import PhotoPerfil from '../components/PhotoPerfil.vue';
import Profile from '../components/Profile.vue';
import SkillsComponent from '../components/SkillsComponent.vue';


    export default{
        name: 'HomeView',
        methods: {  //metodo botton
            goToProjects() {
            this.$router.push('/projects'); // así navegas a la ruta "projects"
            }
        },
        components:{
            NavBar,
  //          PhotoPerfil,
            CardProyect,
            Profile,
            SkillsComponent
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
    background: linear-gradient(to bottom, #a1887f 30%, #ffff 90%);    
    padding: 10%;
    background-image: url('../assets/Blue Night Sky Cute Whale Desktop Wallpaper.png');
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5); /* Opcional: oscurece para mejor lectura */
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
    background-color:#ffff;
    padding-top: 1%;
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
    background-color: #11476D;
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