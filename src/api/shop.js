/**
 * Mocking client-server processing
 */
const _products = [
	{
		id: 1,
		title: "iPad 4 Mini",
		price: 500.01,
		inventory: 2,
		description: "Lorem",
		image: "logo.png",
	},
	{
		id: 2,
		title: "H&M T-Shirt White",
		price: 10.99,
		inventory: 10,
		description: "Lorem",
		image: "logo.png",
	},
	{
		id: 3,
		title: "Charli XCX - Sucker CD",
		price: 19.99,
		inventory: 5,
		description: "Lorem",
		image: "logo.png",
	},
	{
		id: 4,
		title: "iPad 4 Mini",
		price: 500.01,
		inventory: 2,
		description: "Lorem",
		image: "logo.png",
	},
	{
		id: 5,
		title: "H&M T-Shirt White",
		price: 10.99,
		inventory: 10,
		description: "Lorem",
		image: "logo.png",
	},
	{
		id: 6,
		title: "Charli XCX - Sucker CD",
		price: 19.99,
		inventory: 5,
		description: "Lorem",
		image: "logo.png",
	},
]

export default {
	getProducts(cb) {
		setTimeout(() => cb(_products), 100)
	},

	buyProducts(products, cb, errorCb) {
		setTimeout(() => {
			// simulate random checkout failure.
			Math.random() > 0.5 || navigator.webdriver ? cb() : errorCb()
		}, 100)
	},
}
