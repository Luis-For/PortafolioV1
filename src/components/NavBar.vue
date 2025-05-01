<template>
    <div id="navBar">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/Home">Proyectos</router-link>
        <router-link to="/About">About</router-link>
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
  background-color: #1B1F24;
  padding: 15px 100px;
  z-index: 1000;
  border-bottom:3px solid #535353;
  box-sizing: border-box;
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
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
}

#navBar a:hover {
  color: #16d33f;
}

.navBar{
  margin: 0%;
}

</style>