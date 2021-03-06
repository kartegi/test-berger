import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: () => import('./views/Gallery.vue')
    },
    {
      path: '/img/:id',
      component: () => import('./views/ImgInfo.vue')
    },
    {
      path: '/about',
      component: () => import('./views/About.vue')
    }
  ]
})
