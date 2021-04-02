<template>
	<el-row>
		<el-col>
			<el-popover placement="top-end" width="400" trigger="click">
				<el-row>
					<el-col>
						<div class="cart">
							<h2>Your Cart</h2>
							<p v-show="!products.length"><i>Please add some products to cart.</i></p>
							<ul>
								<li v-for="product in products" :key="product.id">
									{{ product.title }} - {{ product.price }} x {{ product.quantity }}
								</li>
							</ul>
							<p>Total: {{ total }}</p>
							<p>
								<!-- @click="checkout(products)" -->
								<button :disabled="!products.length" @click="$router.push('checkout')">
									Checkout
								</button>
							</p>
							<p v-show="checkoutStatus">Checkout {{ checkoutStatus }}.</p>
						</div>
					</el-col>
				</el-row>
				<el-button class="custom-icon" icon="el-icon-shopping-cart-2" slot="reference">{{
					products.length
				}}</el-button>
			</el-popover>
		</el-col>
	</el-row>
</template>

<script>
import { mapGetters, mapState } from "vuex"
export default {
	computed: {
		...mapState({
			checkoutStatus: (state) => state.cart.checkoutStatus,
		}),
		...mapGetters("cart", {
			products: "cartProducts",
			total: "cartTotalPrice",
		}),
	},
	methods: {
		checkout(products) {
			this.$store.dispatch("cart/checkout", products)
		},
	},
}
</script>

<style lang="scss" scoped>
.custom-icon {
	font-size: 2rem;
}
.el-button {
	padding: 6px 10px;
}
.el-col > span {
	float: right;
}
</style>
