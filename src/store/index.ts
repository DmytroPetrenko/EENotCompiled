import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'
import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
// const cart = require("./modules/cart")
// const products = require("./modules/products")

export default new Vuex.Store({
  modules: { cart, products, user },
  strict: debug,
})
