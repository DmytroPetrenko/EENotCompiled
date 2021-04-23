<template>
	<el-row type="flex" justify="center">
		<el-col v-for="product in products" :key="product.id">
			<el-card :body-style="{ padding: '0px' }">
				<div class="img-wrapper">
					<img :src="require(`@/assets/img/${product.image}`)" class="image" />
				</div>
				<div class="item-main">
					<div>
						<span>{{ product.title }}</span>
					</div>
					<div class="price">
						<span>$ {{ product.price }}</span>
					</div>
					<div class="button-wrapper">
						<el-button
							type="text"
							class="button"
							:disabled="!product.inventory"
							@click="addProductToCart(product)"
							>{{ $t("shop.addToCart") }}</el-button
						>
					</div>
				</div>
			</el-card>
		</el-col>
	</el-row>
</template>

<script>
import { mapState, mapActions } from "vuex"
export default {
	computed: mapState({
		products: (state) => state.products.all,
	}),
	methods: mapActions("cart", ["addProductToCart"]),
	created() {
		this.$store.dispatch("products/getAllProducts")
	},
}
</script>

<style lang="scss" scoped>
.el-row {
	flex-wrap: wrap;
	margin-bottom: 20px;
	&:last-child {
		margin-bottom: 0;
	}
}
.el-col {
	border-radius: 4px;
	flex: 0 0 26%;
	margin: 10px;
	min-width: 15em;
}
.item-main {
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
	justify-content: space-between;
	padding: 14px;
	.price {
		padding: 0px 10px;
		white-space: pre;
	}
	.button-wrapper {
		padding: 0 0 0 10px;
	}
}

.button {
	padding: 0;
	float: right;
}

.img-wrapper {
	padding: 5px;
}

.image {
	width: 100%;
	display: block;
}
</style>
