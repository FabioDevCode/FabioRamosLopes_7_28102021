import Vue from "vue";
import VueRouter from "vue-router";

import Index from './views/Index';
import IndexTwo from './views/IndexTwo';
import Home from './views/Home';
import Profil from './views/Profil';
import Users from './views/Users';
import Publish from './views/Publish';
import UserPage from './views/UserPage';
import OnePost from './views/OnePost';
import PostnCmnts from './views/PostnCmnts';


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

        },
        {
            path: "/profil",
            component: Profil,
        },
        {
            path: "/allusers",
            component: Users,
        },
        {
            path: "/publish",
            component: Publish,
        },
        {
            path: "/userpage",
            component: UserPage,
        },
        {
            path: "/post",
            component: OnePost,
        },
        {
            path: "/postwithcomments",
            component: PostnCmnts,
        },

    ]
})