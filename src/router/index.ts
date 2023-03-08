import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Batteries from '../views/Batteries.vue'
import Service from '../views/Service.vue'
import Contact from '../views/Contact.vue'
import Shop from '../views/Shop.vue'
import Checkout from '../views/Checkout.vue'
import Product from '../views/ProductPage.vue'
import Authorization from '../views/Authorization.vue'
// import PageNotFound from "../views/PageNotFound.vue"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/batteries',
    name: 'Batteries',
    component: Batteries,
  },
  {
    path: '/service',
    name: 'Service',
    component: Service,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop,
  },
  {
    path: '/shop/product/:id',
    name: 'Product',
    component: Product,
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout,
  },
  {
    path: '/login',
    name: 'Auth',
    component: Authorization,
  },
  /*   {
    path: "*",
    name: "404",
    component: PageNotFound
  } */
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
