import Vue from 'vue'
import App from './App.vue'
import router from './router'  // Importa el router

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap'

new Vue({
  router,
  render: h=>h(App)
}).$mount('#app')