<template>
<div class="about">
    <!--Menu de navegacion-->
    <NavBar />
    <!--Seccion sobre mi-->
    <section class="hero_about">
        <h2 class="title">{{ content.title }}
            <PhotoPerfil></PhotoPerfil>
        </h2>
        <p class="description" v-html="content.body"></p>
    </section>
</div>
</template>

<script>
import aboutMeContent from '../assets/AboutMeContent';
import NavBar from '../components/NavBar.vue';
import PhotoPerfil from '../components/PhotoPerfil.vue';

export default {
    name: 'AboutView',
    components: {
        NavBar,
        PhotoPerfil
    },
    data() {
        return {
            content: aboutMeContent
        }
    }
}
</script>

<style src="@/assets/styles/about.css"></style>