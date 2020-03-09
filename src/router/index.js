import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import TicketView from '../views/TicketView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add/:id?',
    name: 'Add',
    props : true,
    component: () => import('../views/Add.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/ticket-view/:id?',
    name: 'TicketView',
    props : true,
    component: TicketView
  }
]

const router = new VueRouter({
  routes
})

export default router
