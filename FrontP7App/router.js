import Vue from "vue";
import VueRouter from "vue-router";



Vue.use(VueRouter);

export default new VueRouter({
    linkActiveClass: "is-active",
    routes: [
        {
            path: "/",
            name: "Inex",
            component: Index,
        },
        {
            path: "/Home",
            name: "Home",
            component: Home,
        }












    ]
});