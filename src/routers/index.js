import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
import movieRouter from './movie'
import cinemaRouter from './cinema'
import mineRouter from './mine'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    movieRouter,
    cinemaRouter,
    mineRouter
    /* {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')// 按需加载，大项目推荐这种写法
    } */
  ]
})
