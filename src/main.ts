import { createApp } from 'vue'
import App from './App.vue'
import {Button, NavBar, Tabbar, TabbarItem} from 'vant'
import './plugins/myAxios.ts'

import * as VueRouter from 'vue-router';
import routes from "./config/route.ts";
const app=createApp(App)
app.use(Button)
app.use(NavBar);
app.use(Tabbar);
app.use(TabbarItem);


const router = VueRouter.createRouter({
    history:VueRouter.createWebHashHistory(),
    routes // (缩写) 相当于 routes: routes
})

app.use(router)
app.mount('#app')



