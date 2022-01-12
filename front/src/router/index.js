import Vue from 'vue'
import VueRouter from 'vue-router'
import ClosetView from '@/views/ClosetView.vue'
import DetailView from '@/views/DetailView.vue'
import MainView from '@/views/MainView.vue'
import ClosetAdminView from '@/views/admin/ClosetAdminView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainView',
    component: MainView
  },
  {
    path: '/closet',
    name: 'ClosetView',
    component: ClosetView
  },
  {
    path: '/detail',
    name: 'DetailView',
    component: DetailView
  },
  {
    path: '/closet/edit',
    name: 'ClosetAdminView',
    component: ClosetAdminView
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
