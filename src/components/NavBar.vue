<template>
    <div id="navBar">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/About">About</router-link>
        <router-link to="/Proyects">Proyectos</router-link>
      </nav>
    </div>
  </template>

<script>
export default {
  name: 'navBar',
}
</script>

<style>
#navBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  padding: 15px 100px;
  z-index: 1000;
  border-bottom:0px solid #535353;
  box-sizing: border-box;
  box-shadow: 0 -2px 50px rgba(0, 0, 0, 0.1)
}

#navBar nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 50px; /* Aquí aplicamos la separación */
  max-width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  flex-wrap: wrap;
  padding: 5px;
}

#navBar a {
  font-style: normal;
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}

#navBar a:hover {
  color: #ff3d69;
  text-decoration: underline #ff3d69;

}

.navBar{
  margin: 0%;
}

</style>