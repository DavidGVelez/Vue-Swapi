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
    component: Home,
  },
  // Collection/endpoint Routes
  {
    path: '/people',
    name: 'People',
    component: Collection,
  },
  {
    path: '/starships',
    name: 'Starships',
    component: Collection,
    props: {
      default: true,
      title: "starships",
      data: [
        {
          id: 1,
          name: "Startship #1",
        },
        {
          id: 2,
          name: "Startship #2",
        },
        {
          id: 3,
          name: "Startship #3",
        },

    ]
    }
  },
  {
    path: '/planets',
    name: 'Planets',
    component: Collection,
    props: {
      default: true,
      title: "planets",
      data: [
        {
          id: 1,
          name: "Endor",
        },
        {
          id: 2,
          name: "Tatooine",
        },
        {
          id: 3,
          name: "Hoot",
        },

    ]
    }
  },
  // Endpoint/Json Routes
  {
    path: '/people/:id',
    name: 'Person',
    component: Item,
  },
  {
    path: '/planets/:id',
    name: 'Planet',
    component: Item,
  },
  {
    path: '/starships/:id',
    name: 'Starship',
    component: Item,
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
