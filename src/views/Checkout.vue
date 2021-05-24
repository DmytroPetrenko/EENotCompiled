<template>
	<div class="contact">
		<el-row type="flex" class="row-bg" justify="center">
			<el-col :span="20">
				<h2>{{ $t(`checkout.title`) }}</h2>
				<el-form method="POST" ref="form" :model="form">
					<el-form-item>
						<el-input
							name="name"
							:placeholder="$t(`contact.form.name`)"
							v-model="form.name"
							required
						></el-input>
					</el-form-item>
					<el-form-item>
						<el-input
							name="phone"
							:placeholder="$t(`contact.form.phone`)"
							v-model="form.phone"
							required
						></el-input>
					</el-form-item>
					<el-form-item>
						<el-input
							name="email"
							:placeholder="$t(`contact.form.email`)"
							v-model="form.email"
							required
						></el-input>
					</el-form-item>
					<el-form-item>
						<el-input
							name="country"
							:placeholder="$t(`checkout.form.country`)"
							v-model="form.country"
						></el-input>
					</el-form-item>

					<el-row type="flex" v-for="product in products" :key="product.id">
						<el-col :span="9">
							<img :src="require(`@/assets/img/${product.images[0]}`)" class="image" />
						</el-col>
						<el-col :span="15">
							<div class="productListInCart">
								<h2>{{ product.title }}</h2>
								<p>${{ product.price }} x {{ product.quantity }}</p>
								<div v-if="product.totalPrice">
									<h5>Additional config:</h5>
									<ul class="product-configurator">
										<li v-for="check in product.checkList" :key="check">
											{{ $t("shop.product.products.1.configurator." + check) }}: + ${{
												product.configurator[check]
											}}
										</li>
									</ul>
									<p>
										{{ $t("shop.cart.positionTotal") }}:
										<b>${{ product.totalPrice * product.quantity }}</b>
									</p>
								</div>
								<div v-else>
									<p>
										{{ $t("shop.cart.positionTotal") }}:
										<b>${{ product.price * product.quantity }}</b>
									</p>
								</div>
							</div>
						</el-col>
					</el-row>

					<p>
						{{ $t("shop.cart.total") }}: <b>${{ total }}</b>
					</p>
					<el-form-item>
						<el-button type="primary" @click="submitForm()">
							{{ $t("checkout.form.submit") }}
						</el-button>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import { mapGetters, mapState } from "vuex"
import axios from "axios"
import products from "@/store/modules/products"

export default {
	data() {
		return {
			form: {
				name: "",
				phone: "",
				email: "",
				country: "",
			},
		}
	},
	computed: {
		...mapState({
			checkoutStatus: (state) => state.cart.checkoutStatus,
		}),
		...mapGetters("cart", {
			products: "cartProducts",
			total: "cartTotalPrice",
		}),
		productTitles: function() {
			const arr = []
			for (let i = 0; i < this.products.length; i++) {
				const product = this.products[i]
				arr[i] = product.title
			}
			return arr
		},
		productPrices: function() {
			const arr = []
			for (let i = 0; i < this.products.length; i++) {
				const product = this.products[i]
				arr[i] = product.price
			}
			return arr
		},
		productQuantities: function() {
			const arr = []
			for (let i = 0; i < this.products.length; i++) {
				const product = this.products[i]
				arr[i] = product.quantity
			}
			return arr
		},
		productConfig: function() {
			const arr = []
			for (let i = 0; i < this.products.length; i++) {
				const product = this.products[i]
				let str = ""
				if (product.totalPrice) {
					for (let j = 0; j < product.checkList.length; j++) {
						const check = product.checkList[j]
						str +=
							this.$t("shop.product.products.1.configurator." + check) +
							": + $" +
							product.configurator[check] +
							"      "
					}
					str += "Item price with config: $" + product.totalPrice
				} else {
					str = "No config"
				}
				arr[i] = str
			}
			return arr
		},
	},
	methods: {
		checkout(products) {
			this.$store.dispatch("cart/checkout", products)
		},
		submitForm() {
			const prdct = {
				name: this.form.name,
				phone: this.form.phone,
				email: this.form.email,
				country: this.form.country,
				total: this.total,
				productTitles: this.productTitles,
				productPrices: this.productPrices,
				productQuantities: this.productQuantities,
				productConfig: this.productConfig,
			}
			console.log(prdct)
			axios
				.post("https://serve-node-ee.herokuapp.com/checkout", prdct)
				.then((response) => {
					const result = response.data.result
					console.log(result)

					if (result) {
						this.$router.push("/shop")
					}
				})
				.catch((error) => {
					console.log(error)
					this.$router.push("/shop/product/1")
				})
		},
	},
}
</script>

<style lang="scss" scoped>
.image {
	max-height: 200px;
	display: block;
	margin-left: auto;
	margin-right: auto;
	max-width: 50%;
}
ul {
	margin-top: 0;
	padding: 0 0 0 15px;
}

li {
	list-style-type: none;
}
h5 {
	margin-bottom: 5px;
}
</style>
