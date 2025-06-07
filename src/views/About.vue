<template>
<div class="about">
    <!--Menu de navegacion-->
    <NavBar />
    <div class="aboutMeContainer">
        <Profile></Profile>
    </div>
    <!--Sobre mi-->
    <AboutComponent></AboutComponent>
    <FooterComponent/>
    <FooterEnd/>
</div>
</template>

<script>
import aboutMeContent from '../assets/AboutMeContent';
import AboutComponent from '../components/AboutComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import FooterEnd from '../components/FooterEnd.vue';
import NavBar from '../components/NavBar.vue';
import Profile from '../components/Profile.vue';

export default {
    name: 'AboutView',
    components: {
        NavBar,
        Profile,
        AboutComponent,
        FooterComponent,
        FooterEnd
    },
    data() {
        return {
            content: aboutMeContent
        }
    }
}
//src/assets/Blue Night Sky Cute Whale Desktop Wallpaper.png
</script>
<style>
.aboutMeContainer{
    background-image: url('../assets/Blue Night Sky Cute Whale Desktop Wallpaper.png');
    /*padding-bottom: 15%;*/
    justify-content: center;
    background-position: bottom;
    padding-top: 5%;
    padding-bottom: 4%;
}

#Profile{
    margin-top: 10%;
}

</style>
