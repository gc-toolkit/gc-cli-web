import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'info',
    component: () => import(/* webpackChunkName: "about" */ '../views/InfoView.vue')

  },
  {
    path: '/res',
    name: 'resource',
    component: () => import(/* webpackChunkName: "about" */ '../views/ResView.vue')

  },
  {
    path: '/plugins',
    name: 'plugins',
    component: () => import(/* webpackChunkName: "about" */ '../views/PluginView.vue')

  },
  {
    path: '/packages',
    name: 'pkgs',
    component: () => import(/* webpackChunkName: "about" */ '../views/PackageView.vue')

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
