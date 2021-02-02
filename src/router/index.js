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
          id: 1,
          name: "Luke",
        },
        {
          id: 2,
          name: "Leia",
        },
        {
          id: 3,
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
      title: "Starships",
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
      title: "Planets",
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
    props: {id: true}
  },
  {
    path: '/planets/:id',
    name: 'Planet',
    component: Item,
    props:{id: true}
  },
  {
    path: '/starships/:id',
    name: 'Starship',
    component: Item,
    props: {id: true}
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
