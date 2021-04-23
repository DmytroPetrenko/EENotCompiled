<template>
	<div class="contact">
		<el-row type="flex" class="row-bg" justify="center">
			<el-col :span="20">
				<h2>{{ $t(`checkout.title`) }}</h2>
				<el-form action="https://formspree.io/f/mleogdwn" method="POST" ref="form" :model="form">
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
					<el-form-item class="displaynone">
						<el-input name="total" :value="total"></el-input>
					</el-form-item>
					<el-form-item>
						<el-input
							v-for="product in products"
							:key="product.id"
							:name="`Item` + product.id"
							:value="product.title + ` Value: ` + product.price + ` Quantity: ` + product.quantity"
						></el-input>
					</el-form-item>
					<el-form-item>
						<el-button native-type="submit" type="primary">
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
	},
	methods: {
		checkout(products) {
			this.$store.dispatch("cart/checkout", products)
		},
	},
}
</script>

<style lang="scss" scoped>
// prettier-ignore
@import url(https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap);

.displaynone {
	display: none;
}

.el-row {
	flex-wrap: wrap;
	margin-bottom: 20px;
	&:last-child {
		margin-bottom: 0;
	}
}
.el-col {
	border-radius: 4px;
	min-width: 250px;
	padding: 0 20px;
}
.google-map {
	height: 40rem;
	position: relative;
	iframe {
		height: 100%;
		width: 100%;
	}
}
h2 {
	font-family: "Rubik", sans-serif;
	font-size: 3rem;
	padding-bottom: 1rem !important;
	font-weight: 300;
	line-height: 1.2;
	margin-bottom: 0.5rem;
	margin-top: 0;
}
.icon-message-block {
	margin-bottom: 10px;
	padding-bottom: 1rem !important;
	.el-icon-message {
		display: inline-block;
		vertical-align: middle;
		font-size: 48px;
		padding-right: 1rem;
	}
	h4 {
		display: inline-block;
		vertical-align: middle;
		margin-bottom: 0;
		line-height: 1;
		font-style: italic;
		font-size: 1.5rem;
		margin-top: 0;
		font-weight: 300;
	}
}
.suggestions {
	padding-bottom: 1rem !important;
	h5 {
		font-family: "Rubik", sans-serif;
		font-size: 1rem;
		margin-bottom: 0.5rem;
		font-weight: 500;
		line-height: 1.2;
		margin-top: 0;
	}
	.contacts {
		color: #767676;
		font-family: "Rubik", sans-serif;
		font-size: 1rem;
		margin-top: 0;
		margin-bottom: 1rem;
		p {
			margin: 0;
		}
	}
}
</style>
