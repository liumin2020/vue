import Vue from 'vue'
import Router from 'vue-router';
import useEle from '@/components/common/useEle.vue';
import Login from'@/components/login/login.vue';
import Home from '@/components/pages/home.vue';


Vue.use(Router)

export default new Router({
  routes: [
    {
    name:'ele',
    path:'/ele',
    component:useEle
    },
    {
       nama:'login',
       path:'/login',
       component:Login
    },
    {
      name:'home',
      path:'/home',
      component:Home
    }
  ]
})
