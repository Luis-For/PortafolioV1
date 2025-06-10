<template>
<div class="all">
    <!-- Barra de tareas-->
    <div class="header">
        <header>
            <NavBar />
        </header>
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
        <ProyectsComponent></ProyectsComponent>
    </div>
    <!-- pie de pagina-->
    <FooterComponent />
    <footer class="EndPage">
        <FooterEnd></FooterEnd>
    </footer>
</div>
</template>

<script>
import FooterComponent from '../components/FooterComponent.vue';
import FooterEnd from '../components/FooterEnd.vue';
import NavBar from '../components/NavBar.vue';
import Profile from '../components/Profile.vue';
import ProyectsComponent from '../components/ProyectsComponent.vue';
import SkillsComponent from '../components/SkillsComponent.vue';

export default {
    name: 'HomeView',
    methods: { //metodo botton
        goToProjects() {
            this.$router.push('/projects'); // así navegas a la ruta "projects"
        }
    },
    components: {
        NavBar,
        //          PhotoPerfil,
        //CardProyect,
        Profile,
        SkillsComponent,
        ProyectsComponent,
        FooterComponent,
        FooterEnd
    }
}
</script>

<style>
.header {
    position: absolute;
    top: -80px;
    background-color: #1B1F24;
}

.hero-description {
    color: #2c3e50;
    position: relative;
    border-bottom: 2px solid gray;
    background: linear-gradient(to bottom, #a1887f 30%, #ffff 90%);
    padding: 10%;
    background-image: url('../assets/images/fondo_bule.webp');
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    background-color: rgba(0, 0, 0, 0.5);
    /* Opcional: oscurece para mejor lectura */
    /*background-color: ;*/
}

.title {
    font-family: sans-serif;
    color: #2c3e50;
    position: absolute;
    left: 3%;
    top: 3%;
    font-size: 3rem;
}

.intro {
    position: absolute;
    text-align: justify;
    left: 3%;
    top: 23%;
    font-size: 1.4rem;
}

.Skills {
    color: white;
    background-color: #ffff;
    padding-top: 1%;
}

.Skills ul {
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

.Skills img {
    width: 100px;
    height: 40px;
}

.proyectos {
    background-color: #11476D;
    padding: 1%;
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
}

.proyectos ul {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    padding: 2%;
}

.proyectos li {
    top: 100%;
    right: 100%;
}

.EndPage {
    padding: 2%;
    color: #232B35;
    background-color: none;
    padding: 0%;
}
</style>
