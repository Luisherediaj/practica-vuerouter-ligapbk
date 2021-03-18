import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reglamento',
    name: 'Reglamento',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Reglamento.vue')
  },
  {
    path: '/clubs',
    name: 'Clubs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Clubs.vue')
  },
  {
    path: '/oficina-central',
    name: 'Oficina central',
    component: () => import(/* webpackChunkName: "about" */ '../views/OficinaCentral.vue')
  },
  {
    path: '/calendario',
    name: 'Calendario',
    component: () => import(/* webpackChunkName: "about" */ '../views/Calendario.vue')
  },
  {
    path: '/ligapbk',
    name: 'Liga PBK',
    component: () => import(/* webpackChunkName: "about" */ '../views/LigaPBK.vue')
  },
  {
    path: '/pbkchampions',
    name: 'PBK Champions',
    component: () => import(/* webpackChunkName: "about" */ '../views/PBKChampions.vue')
  },
  {
    path: '/pbkopa',
    name: 'PBKopa',
    component: () => import(/* webpackChunkName: "about" */ '../views/PBKopa.vue')
  },
  {
    path: '/gratificaciones',
    name: 'Gratificaciones',
    component: () => import(/* webpackChunkName: "about" */ '../views/Gratificaciones.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
