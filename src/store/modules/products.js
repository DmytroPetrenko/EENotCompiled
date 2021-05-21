import shop from "../../api/shop"

// initial state
const state = () => ({
	all: [],
	defaultProducts: [],
	configCombinations: [],
	configIds: [],
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
	getConfigCombinations: (state) => () => {
		return state.configCombinations
	},
	getConfigIds: (state) => () => {
		return state.configIds
	},
}

// actions
const actions = {
	getAllProducts({ commit }) {
		shop.getProducts((products) => {
			commit("setProducts", products)
		})
	},
	getAllDefaultProducts({ commit }) {
		shop.getDefaultProducts((products) => {
			commit("setDefaultProducts", products)
		})
	},
	addNewProduct({ state, commit }, product) {
		commit("addNewProduct", product)
	},
	addNewConfigCombinations({ commit }, config) {
		commit("addNewConfigCombinations", config)
	},
	addNewConfigIds({ commit }, id) {
		commit("addNewConfigIds", id)
	},
}

// mutations
const mutations = {
	setProducts(state, products) {
		state.all = products
	},
	setDefaultProducts(state, products) {
		state.defaultProducts = products
	},

	addNewProduct(state, product) {
		state.all.push(product)
	},

	addNewConfigCombinations(state, config) {
		state.configCombinations.push(config)
	},

	addNewConfigIds(state, id) {
		state.configIds.push(id)
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
