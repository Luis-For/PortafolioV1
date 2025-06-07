<template>
  <div id="navBar">
    <div class="navbar-container">
      <div id="logoContainer">
        <img src="../assets/Systems_and_technology_programming_company_logo-removebg-preview.png" alt="Logo">
      </div>

      <button class="hamburger" @click="toggleMenu">
        <span></span><span></span><span></span>
      </button>

      <nav :class="{ open: menuOpen }">
        <router-link to="/">Home</router-link>
        <router-link to="/About">About</router-link>
        <router-link to="/Proyects">Proyectos</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navBar',
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

<style scoped>
#navBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #275E82;
  padding: 8px 10%;
  z-index: 1000;
  box-shadow: 0 -2px 50px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
}

/* Logo */
#logoContainer img {
  height: 55px;
  max-width: 100%;
}

/* Enlaces del nav */
nav {
  display: flex;
  gap: 30px;
  align-items: center;
}

nav a {
  color: rgb(0, 0, 0);
  text-decoration: none;
  font-size: 25px;
  font-weight: bold;
}

nav a:hover {
  color: #ffffff;
  text-decoration: underline #ffffff;
}

/* Botón hamburguesa */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
}

.hamburger span {
  width: 25px;
  height: 3px;
  background-color: #000;
  border-radius: 2px;
}

/* Responsive */
@media (max-width: 768px) {
  nav {
    position: absolute;
    top: 60px;
    right: 5%;
    background-color: #275E82;
    border: 1px solid #ddd;
    flex-direction: column;
    padding: 15px;
    display: none;
  }

  nav.open {
    display: flex;
  }

  .hamburger {
    display: flex;
  }
}
</style>
