import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Notepad from '../views/Notepad.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pad',
    name: 'Notepad',
    component: Notepad
  },
  {
    path: '/pens',
    name: 'Pens',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pens.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
