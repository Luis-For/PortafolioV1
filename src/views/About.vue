<template>
    <div class="about">
        <!--Menu de navegacion-->
        <NavBar/>
        <!--Seccion sobre mi-->
        <section class="hero_about">
            <h2 class="title">{{ content.title }}<PhotoPerfil></PhotoPerfil></h2>
            <p class="description" v-html="content.body"></p>
        </section>
    </div>
</template>

<script>
import { aboutMeContent } from '../assets/AboutMeContent';
import NavBar from '../components/NavBar.vue';
import PhotoPerfil from '../components/PhotoPerfil.vue';
    export default{
        name:'AboutView',
        components:{
            NavBar,
            PhotoPerfil
        },
        data(){
            return{
                content:aboutMeContent
            }
        }
    }    
</script>

<style>
.hero_about {
    /*border: 3px solid #e4e4e4;*/
    border-bottom:2px solid #535353;
    padding: 10px;
}

.description{
    text-align: justify;
    max-width: 1200px;
    padding:2%;
    margin: 0;
    line-height: 1.5;
    font-size: 16px;
    color: aliceblue;
}

body{
    /*background: linear-gradient(#00062b,#060a24);*/
    background-color: #11120F;
}
</style>