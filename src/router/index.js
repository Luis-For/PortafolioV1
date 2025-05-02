import Vue from "vue";
import HomeView from "../views/Home.vue";
import AboutView from '../views/About.vue'
import VueRouter from 'vue-router';
//import { component } from "vue/types/umd";
import ProyectsView from "../views/Proyects.vue";

Vue.use(VueRouter);

const routes=[
    {
        path: '/',  //ruta raiz
        name: 'Home',
        component:HomeView
    },{
        path:'/about',
        name:'About',
        component:AboutView
    },{
        path:'/proyects',
        name:'Proyects',
        component: ProyectsView
    }
];

const router=new VueRouter({
    mode:'history',
    routes
});

export default router