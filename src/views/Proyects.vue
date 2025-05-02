<template>
    <div class="container">
        <!--Cabecera-->
        <div class="navBar">
            <NavBar></NavBar>
        </div>

        <!--presentacion-->
        <div class="heroSection">
            <div class="textContainer">
                <strong><h2>HOLA MUNDO!</h2></strong>
                <p>Mis proyectos reflejan mi pasión por crear soluciones funcionales y bien pensadas</p>
                <p>Desde aplicaciones web hasta herramientas interactivas, cada proyecto es una muestra de lo que puedo construir. ¿Listo para crear algo juntos?</p>
            </div>
            <div class="imagenContainer">
                <img src="/src/assets/oZmI3HE1IrxwMJIqZO2lS-transformed.png" alt="s">
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '../components/NavBar.vue';
//import PhotoPerfil from '../components/PhotoPerfil.vue';

export default{
    name:'ProyectsView',
    components:{
        NavBar,
        //PhotoPerfil
    }
}
</script>

<style>
.heroSection{
    background-color: #e2eff8;
}
.textContainer{
    top: 30%;
    max-width: 50%;
    position: relative;
}
.textContainer h2{
    font-size: 4rem;
    font-family: sans-serif;   
    margin-bottom: 2rem;
}

.textContainer p{   
    font-size: 2rem;
    text-align: justify;
}

.imagenContainer{
    max-width: 100%;
}
</style>