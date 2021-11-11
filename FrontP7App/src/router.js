import Vue from "vue";
import VueRouter from "vue-router";

import Index from './views/Index'
import Home from './views/Home'




Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            name: "Index",
            component: Index,
        },
        {
            path: "/home",
            name: "Home",
            component: Home,

        }
    ]
})