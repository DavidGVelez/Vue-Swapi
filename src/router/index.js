import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Collection from "../views/Collection.vue"
import Item from "../views/Item.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Collection/endpoint Routes
  {
    path: '/people',
    name: 'People',
    component: Collection
  },
  {
    path: '/starships',
    name: 'Starships',
    component: Collection
  },
  {
    path: '/planets',
    name: 'Planets',
    component: Collection
  },
  // Endpoint/Json Routes
  {
    path: '/people/:id',
    name: 'People/:id',
    component: Item
  },
  {
    path: '/planets/:id',
    name: 'Planet/:id',
    component: Item
  },
  {
    path: '/starships/:id',
    name: 'Starship/:id',
    component: Item
  },

]

const router = new VueRouter({
  routes
})

export default router
