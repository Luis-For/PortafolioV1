<template>
<div class="container">
    <!--Cabecera-->
    <div class="navBar">
        <NavBar></NavBar>
    </div>

    <!--presentacion-->
    <div class="heroSection">
        <div class="textContainer">
            <strong>
                <h2>HOLA MUNDO!</h2>
            </strong>
            <p>Mis proyectos reflejan mi pasión por crear soluciones funcionales y bien pensadas</p>
            <p>Desde aplicaciones web hasta herramientas interactivas, cada proyecto es una muestra de lo que puedo construir. ¿Listo para crear algo juntos?</p>
        </div>
        <!--<div class="imagenContainer">
            <img src="../assets/oZmI3HE1IrxwMJIqZO2lS-transformed.png" alt="s">
        </div>-->
    </div>

    <!--Cartas de proyectos-->
    <p><code>wrapAround: true</code></p>
    <!-- Flickity HTML init -->
    <div class="gallery js-flickity" data-flickity-options='{ "wrapAround": true }'>
        <div class="gallery-cell"></div>
        <div class="gallery-cell"></div>
        <div class="gallery-cell"></div>
        <div class="gallery-cell"></div>
        <div class="gallery-cell"></div>
    </div>

</div>
</template>

<script>
//import CardProyect from '../components/CardProyect.vue';
import NavBar from '../components/NavBar.vue';

export default {
    name: 'ProyectsView',
    components: {
        NavBar,
        //CardProyect
    }
}
</script>

<style>

body {
    margin: 0;
    /* Elimina los márgenes predeterminados del body */
    padding: 0;
    /* Elimina el padding predeterminado del body */
}

.heroSection {
    display: flex;
    background-color: #e2eff8;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    padding-top: 5%;
    padding-bottom: none;
    position: relative;
    align-items: center;
    justify-content: space-between;
    background-image: url("../assets/oZmI3HE1IrxwMJIqZO2lS-transformed.png");
    background-size: 30%;
    background-position: 15%;
    background-repeat: no-repeat;
    background-position-x: right;
    /* Distribuye el espacio entre texto e imagen */
}

.textContainer {
    top: 30%;
    max-width: 50%;
    position: relative;
    margin-left: 10%;
    margin-right: 10%;
}

.textContainer h2 {
    font-size: 4rem;
    font-family: sans-serif;
    text-align: justify;

}

.textContainer p {
    font-size: 1.5rem;
    text-align: justify;
}

.imagenContainer {
    width: 30%;
    /* Define el ancho del contenedor de la imagen */
    height: auto;
    /* La altura se ajustará según la proporción de la imagen */
    overflow: hidden;
    /* Oculta cualquier parte de la imagen que se salga */
    margin-bottom: -0.4%;
    background-image: url("../assets/oZmI3HE1IrxwMJIqZO2lS-transformed.png");
}

.imagenContainer img {
    width: 80%;
    top: 0%;
    right: 10%;
    position: relative;
    object-fit: scale-down;
    background-image: url("../assets/oZmI3HE1IrxwMJIqZO2lS-transformed.png");
}

.listOfProyectsBackend {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 20px;
    padding: 2%;
}

/*Response adaptation 1751*/

@media (max-width: 769) {
    .contentWrapper {
        flex-direction: column;
        text-align: center;
    }

    .textContainer {
        top: 0;
        max-width: 100%;
    }

    .textContainer h2 {
        font-size: 1.8rem;
    }

    .textContainer p {
        font-size: 1rem;
    }

    .heroSection {
        color: blueviolet;
    }

}
</style>
