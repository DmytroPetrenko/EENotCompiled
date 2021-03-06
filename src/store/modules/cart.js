import shop from "../../api/shop"

// initial state
// shape: [{ id, quantity }]
const state = () => ({
	items: [],
	checkoutStatus: null,
})

// getters
const getters = {
	cartProducts: (state, getters, rootState) => {
		return state.items.map(({ id, quantity }) => {
			const product = rootState.products.all.find((product) => product.id === id)
			return {
				id: product.id,
				title: product.title,
				price: product.price,
				images: product.images,
				configurator: product.configurator,
				checked: product.checked,
				checkList: product.checkList,
				totalPrice: product.totalPrice,
				quantity,
			}
		})
	},

	cartTotalPrice: (state, getters) => {
		return getters.cartProducts.reduce((total, product) => {
			if (product.totalPrice) {
				return total + product.totalPrice * product.quantity
			}
			return total + product.price * product.quantity
		}, 0)
	},

	itemsInCart: (state, getters) => {
		return getters.cartProducts.reduce((count, product) => {
			return count + product.quantity
		}, 0)
	},
}

// actions
const actions = {
	checkout({ commit, state } /* , products */) {
		const savedCartItems = [...state.items]
		commit("setCheckoutStatus", null)
		// empty cart
		commit("setCartItems", { items: [] })
		/* 		shop.buyProducts(
			products,
			() => commit("setCheckoutStatus", "successful"),
			() => {
				commit("setCheckoutStatus", "failed")
				// rollback to the cart saved before sending the request
				commit("setCartItems", { items: savedCartItems })
			},
		) */
	},

	addProductToCart({ state, commit }, product) {
		commit("setCheckoutStatus", null)
		if (product.inventory > 0) {
			const cartItem = state.items.find((item) => item.id === product.id)
			if (!cartItem) {
				commit("pushProductToCart", { id: product.id })
			} else {
				commit("incrementItemQuantity", cartItem)
			}
			// remove 1 item from stock
			commit("products/decrementProductInventory", { id: product.id }, { root: true })
		}
	},
}

// mutations
const mutations = {
	pushProductToCart(state, { id }) {
		state.items.push({
			id,
			quantity: 1,
		})
	},

	incrementItemQuantity(state, { id }) {
		const cartItem = state.items.find((item) => item.id === id)
		cartItem.quantity++
	},

	setCartItems(state, { items }) {
		state.items = items
	},

	setCheckoutStatus(state, status) {
		state.checkoutStatus = status
	},
}

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations,
}
