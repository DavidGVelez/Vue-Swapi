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
    props: {
      default: true,
      title: "People",
      data: [
        {
          name: "Luke",
        },
        {
          name: "Leia",
        },
        {
          name: "Darth Vader",
        },
       
    ],
    content: true
    }
  },
  {
    path: '/starships',
    name: 'Starships',
    component: Collection,
    props: {
      default: true,
      title: "Starthips",
      data: [
        {
          name: "Startship #1",
        },
        {
          name: "Startship #2",
        },
        {
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
      title: "Planets",
      data: [
        {
          name: "Endor",
        },
        {
          name: "Tatooine",
        },
        {
          name: "Hoot",
        },

    ]
    }
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
  mode: 'history',
  routes
})

export default router
