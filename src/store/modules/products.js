import shop from "../../api/shop"

// initial state
const state = () => ({
	all: [],
})

// getters
const getters = {
	getById: (state, getters) => (id) => {
		return state.all.find((product) => product.id === parseInt(id))
	},
	getLastElement: (state, getters) => () => {
		return state.all[state.all.length - 1]
	},
	getShopSize: (state) => () => {
		return state.all.length
	},
}

// actions
const actions = {
	getAllProducts({ commit }) {
		shop.getProducts((products) => {
			commit("setProducts", products)
		})
	},
	addNewProduct({ state, commit }, product) {
		commit("addNewProduct", product)
	},
}

// mutations
const mutations = {
	setProducts(state, products) {
		state.all = products
	},

	addNewProduct(state, product) {
		state.all.push(product)
	},

	decrementProductInventory(state, { id }) {
		const product = state.all.find((product) => product.id === id)
		product.inventory--
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
