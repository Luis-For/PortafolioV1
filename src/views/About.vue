<template>
<div class="about">
    <!--Menu de navegacion-->
    <NavBar />
    <div class="aboutMeContainer">
        <Profile></Profile>
    </div>
</div>
</template>

<script>
import aboutMeContent from '../assets/AboutMeContent';
import NavBar from '../components/NavBar.vue';
import Profile from '../components/Profile.vue';

export default {
    name: 'AboutView',
    components: {
        NavBar,
        Profile
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
    padding-bottom: 15%;
    justify-content: center;
    background-position: bottom;
}

#Profile{
    margin-top: 10%;
}

</style>
