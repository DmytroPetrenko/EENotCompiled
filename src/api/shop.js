/**
 * Mocking client-server processing
 */
const _products = [
	{
		id: 1,
		title: "ECU for Nissan Leaf",
		price: 450.0,
		inventory: 2000,
		images: ["noImage.jpg"],
		configurator: [50, 100, 100, 300],
		checked: [false, false, false, false],
		checkList: [],
	},
	{
		id: 2,
		title: "Nissan Leaf Motor",
		price: 400.0,
		inventory: 1000,
		images: ["NissanLeafMotor3.jpeg", "NissanLeafMotor2.jpg", "NissanLeafMotor.jpg"],
		configurator: [],
		checked: [false, false, false, false],
		checkList: [],
	},
	{
		id: 3,
		title: "Nissan Leaf Invertor",
		price: 300.0,
		inventory: 5000,
		images: ["NissanLeafInvertor.jpeg"],
		configurator: [],
		checked: [false, false, false, false],
		checkList: [],
	},
	{
		id: 4,
		title: "Nissan Leaf HV Relay",
		price: 150.0,
		inventory: 2000,
		images: ["nissanrelays.jpg"],
		configurator: [],
		checked: [false, false, false, false],
		checkList: [],
	},
	{
		id: 5,
		title: "Chevrolet Volt BMS Monitoring System",
		price: 250.0,
		inventory: 1000,
		images: ["noImage.jpg"],
		configurator: [],
		checked: [false, false, false, false],
		checkList: [],
	},
	{
		id: 6,
		title: "ELM 327 1.5V",
		price: 15.0,
		inventory: 5000,
		images: ["ELM327.jpg"],
		configurator: [],
		checked: [false, false, false, false],
		checkList: [],
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
