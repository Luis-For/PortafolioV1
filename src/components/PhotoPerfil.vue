<template>
<div class="PhotoPerfil">
    <div class="imgWrapper">
        <img class="PhotoOfPerfil" src="../assets/oZmI3HE1IrxwMJIqZO2lS-transformed.png" alt="">
    </div>
    <div class="cuadrado"></div>
    <div class="cuadrado"></div>
    <div class="cuadrado"></div>
</div>
</template>

<script>
export default {
    name: 'PhotoPerfil'
}
</script>

<style>
.cuadrado {
    width: 190px;
    /* Ancho de 150 píxeles */
    height: 190px;
    /* Alto de 150 píxeles */
    background: none;
    /* Fondo de color rojo */
    border: 2px solid #ff0000;
    /* Borde color negro y de 1 píxel de grosor */
    position: absolute;
    top: 60%;
    right: 70%;
    z-index: 1;
}

.cuadrado::before {
    width: 100px;
    /* Ancho de 150 píxeles */
    height: 100px;
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

.cuadrado::after {
    width: 300px;
    /* Ancho de 150 píxeles */
    height: 300px;
    /* Alto de 150 píxeles */
    background: none;
    border: 1px solid #E4A501;
    position: absolute;
    top: -260px;
    right: 1150px;
    content: "";
    z-index: 1;
}

.imgWrapper {
    width: 95%;
    height: 95%;
    border-radius: 50%;
    overflow: hidden;
    background: rgb(66, 66, 66);
    border: 3px solid gray;
}

.PhotoPerfil {
    border-radius: 50%;
    width: 500px;
    height: 500px;
    position: relative;
    top: 10%;
    left: 70%;
    z-index: 5;
}

.PhotoOfPerfil {
    right: 8%;
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* Asegura que la imagen llene bien el círculo */
    object-position: center;
    display: block;
    z-index: 5;
}
</style>
