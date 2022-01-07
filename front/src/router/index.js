import Vue from 'vue'
import VueRouter from 'vue-router'
import ClosetView from '@/views/ClosetView.vue'
import DetailView from '@/views/DetailView.vue'
import MainView from '@/views/MainView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/mycloset',
    name: 'ClosetView',
    component: ClosetView
  },
  {
    path: '/detail',
    name: 'DetailView',
    component: DetailView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
