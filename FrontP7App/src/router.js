import Vue from "vue";
import VueRouter from "vue-router";

import Index from './views/Index'
import IndexTwo from './views/IndexTwo'
import Home from './views/Home'




Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: "/",
            component: Index,
        },
        {
            path: "/signup",
            component: IndexTwo,
        },
        {
            path: "/home",
            component: Home,

        }
    ]
})