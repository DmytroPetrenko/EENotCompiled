/**
 * Mocking client-server processing
 */
const _products = [
	{
		id: 1,
		title: "ECU for Nissan Leaf",
		price: 650.0,
		inventory: 2000,
		description: "Lorem",
		image: "logo.png",
	},
	{
		id: 2,
		title: "Nissan Leaf Motor",
		price: 400.0,
		inventory: 1000,
		description: "Lorem",
		image: "NissanLeafMotor3.jpeg",
	},
	{
		id: 3,
		title: "Nissan Leaf Invertor",
		price: 300.0,
		inventory: 5000,
		description: "Lorem",
		image: "NissanLeafInvertor.jpeg",
	},
	{
		id: 4,
		title: "Nissan Leaf HV Relay",
		price: 150.0,
		inventory: 2000,
		description: "Lorem",
		image: "nissanrelays.jpg",
	},
	{
		id: 5,
		title: "Chevrolet Volt BMS Monitoring System",
		price: 250.0,
		inventory: 1000,
		description: "Lorem",
		image: "logo.png",
	},
	{
		id: 6,
		title: "ELM 327 1.5V",
		price: 15.0,
		inventory: 5000,
		description: "Lorem",
		image: "ELM327.jpg",
	},
]

export default {
	getProducts(cb) {
		setTimeout(() => cb(_products), 100)
	},

	buyProducts(products, cb, errorCb) {
		setTimeout(() => {
			// simulate random checkout failure.
			Math.random() > 0 || navigator.webdriver ? cb() : errorCb()
		}, 100)
	},
}
