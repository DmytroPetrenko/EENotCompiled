import Vue from "vue"
import Vuex from "vuex"
import cart from "./modules/cart"
import products from "./modules/products"

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== "production"
// const cart = require("./modules/cart")
// const products = require("./modules/products")

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {},
	modules: { cart, products },
	strict: debug,
})
