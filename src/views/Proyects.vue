<template>
<div class="container">
    <!--Cabecera-->
    <div class="navBar">
        <NavBar></NavBar>
    </div>

    <!--presentacion-->
    <div class="heroSection">
        <Profile/>
    </div>

    <div class="seccionProyects">
        
    </div>
    <CardsComponent></CardsComponent>
    <FooterComponent/>
    <FooterEnd/>

</div>
</template>

<script>
import CardsComponent from '../components/CardsComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import FooterEnd from '../components/FooterEnd.vue';    
import NavBar from '../components/NavBar.vue';
import Profile from '../components/Profile.vue';

export default {
    name: 'ProyectsView',
    components: {
        NavBar,
        //CardProyect
        CardsComponent,
        Profile,
        FooterComponent,
        FooterEnd
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
    background-image: url('../assets/Blue Night Sky Cute Whale Desktop Wallpaper.png');
    justify-content: center;
    padding-top: 5%;
    padding-bottom: 4%;
    background-position: bottom;
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
