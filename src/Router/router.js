import Vue from 'vue';
import vueRouter from 'vue-router';
Vue.use(vueRouter);
//导入路由的组件
import Chat from '../Components/Pages/Chat.vue';
import Find from '../Components/Pages/Find.vue';
import My from '../Components/Pages/My.vue';
import User from '../Components/Pages/User.vue';
import Chatpages from '../Components/Pages/Chat/Chat.vue';
import pyq from '../Components/Pages/pagesChild/pyq.vue';
const routes=[
    {
        path:"/",
        component:Chat
    },
    {
        path:"/User",
        component:User
    },
    {
        path:"/Find",
        component:Find
    },
    {
        path:"/My",
        component:My
    },
    {
        path:"/Chat",
        component:Chatpages
    },
    {
        path:"/pyq",
        component:pyq
    }
]
const router=new vueRouter({
    routes
});
export default router;