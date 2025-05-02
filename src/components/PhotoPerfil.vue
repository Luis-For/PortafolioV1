<template>
<div class="PhotoPerfil">
    <div class="imgWrapper">
        <img class="PhotoOfPerfil" src="../assets/oZmI3HE1IrxwMJIqZO2lS-transformed.png" alt="">
        <!--<div class="cuadrado"></div>
        <div class="cuadrado"></div>-->
    </div>
</div>
</template>

<script>
export default {
    name: 'PhotoPerfil'
}
</script>

<style>

.PhotoPerfil {
    position: relative;
    max-width: 30%;
    top: 10%;
    left: 70%;
    z-index: 5;
}

.imgWrapper {
    width: 95%;
    height: 95%;
    /*border-radius: 50%;
    overflow: hidden;
    background: rgb(66, 66, 66);
    border: 3px solid gray;*/
    overflow: hidden;
    position: relative;
}

.PhotoOfPerfil {
    position: relative;
    max-width: 100%;
    height: auto;
    display: block;
    bottom: 20%;
}

.cuadrado {
    width: 100%;
    height: 10%;
    background: none;
    border: 2px solid #ff0000;
    position: absolute;
    top: 60%;
    right: 70%;
    z-index: 1;
}

.cuadrado::before {
    width: 50%;
    /* Ancho de 150 píxeles */
    height: 1000%;
    /* Alto de 150 píxeles */
    background: none;
    /* Fondo de color rojo */
    border: 2px solid #ffffff;
    /* Borde color negro y de 1 píxel de grosor */
    position: absolute;
    top: -140%;
    right: -175%;
    z-index: 1;
    content: "";
}
</style>
