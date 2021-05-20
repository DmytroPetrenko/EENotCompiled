<template>
	<div>
		<el-row :gutter="10">
			<el-col
				:xs="{ span: 24, offset: 0 }"
				:sm="{ span: 16, offset: 4 }"
				:md="{ span: 10, offset: 2 }"
			>
				<el-breadcrumb separator-class="el-icon-arrow-right">
					<el-breadcrumb-item :to="{ path: '/shop' }">{{ $t("menu.shop") }}</el-breadcrumb-item>
					<el-breadcrumb-item>{{ product.title }}</el-breadcrumb-item>
				</el-breadcrumb>
			</el-col>
		</el-row>
		<ShoppingCart />
		<el-row :gutter="10">
			<el-col
				:xs="{ span: 24, offset: 0 }"
				:sm="{ span: 16, offset: 4 }"
				:md="{ span: 10, offset: 2 }"
			>
				<el-row>
					<el-carousel
						:autoplay="false"
						trigger="click"
						indicator-position="none"
						ref="carousel"
						:arrow="product.images.length <= 1 ? `never` : `hover`"
					>
						<el-carousel-item v-for="image in product.images" :key="image" :name="image">
							<img :src="require(`@/assets/img/${image}`)" class="image" />
						</el-carousel-item>
					</el-carousel>
				</el-row>
				<el-row class="suggested-image" v-show="product.images.length <= 1 ? false : true">
					<div class="image" v-for="image in product.images" :key="image">
						<img :src="require(`@/assets/img/${image}`)" @click="setActiveItem(image)" />
					</div>
				</el-row>
			</el-col>
			<el-col
				:xs="{ span: 24, offset: 0 }"
				:sm="{ span: 16, offset: 4 }"
				:md="{ span: 10, offset: 0 }"
			>
				<h2>{{ product.title }}</h2>
				<el-divider></el-divider>
				<h1>${{ SummaryPrice }}</h1>
				<el-checkbox-group v-model="product.checkList">
					<el-checkbox label="0" v-model="product.checked[0]"
						>поддержка датчика тока + ${{ product.configurator[0] }}</el-checkbox
					>
					<el-checkbox label="1" v-model="product.checked[1]"
						>поддержка BMS + ${{ product.configurator[1] }}</el-checkbox
					>
					<el-checkbox label="2" v-model="product.checked[2]"
						>поддержка зарядного устройства LEAF (PDM) + ${{ product.configurator[2] }}</el-checkbox
					>
					<el-checkbox label="3" v-model="product.checked[3]"
						>поддержка быстрой зарядки Сhademo + ${{ product.configurator[3] }}</el-checkbox
					>
				</el-checkbox-group>
				<p></p>
				<el-button
					type="text"
					class="button"
					:disabled="!product.inventory"
					@click="addThisProductToCart(product)"
				>
					{{ $t("shop.product.addToCart") }}
				</el-button>

				<div class="description">
					<el-divider content-position="left">{{ $t("shop.product.description") }}</el-divider>
					<p>{{ $t("shop.product.description-text." + product.id) }}</p>
				</div>
			</el-col>
		</el-row>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import { namespace } from "vuex-class"
import ShoppingCart from "../components/ShoppingCart.vue"

const Products = namespace("products")
const Cart = namespace("cart")

@Component({
	name: "ProductPage",
	components: {
		ShoppingCart,
	},
})
export default class ProductPage extends Vue {
	@Products.Getter getById: any
	@Products.Action getAllProducts: any
	@Cart.Action addProductToCart: any
	get myCarousel(): any {
		return this.$refs.carousel
	}

	get product() {
		return this.getById(this.$route.params.id)
	}

	get SummaryPrice() {
		let sum = 0
		for (let i = 0; i < this.product.checkList.length; i++) {
			const element = this.product.checkList[i]
			sum += this.product.configurator[element]
		}
		return this.product.price + sum
	}

	created() {
		this.getAllProducts()
	}

	setActiveItem(index) {
		this.myCarousel.setActiveItem(index)
	}

	addThisProductToCart(product) {
		product.id = product.id
		this.addProductToCart(product)
	}
}
</script>

<style lang="scss" scoped>
.el-carousel {
	.el-carousel-item {
		position: relative;
	}

	.image {
		max-height: 100%;
		max-width: 100%;
		width: auto;
		height: auto;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		padding: 0 20px;
		box-sizing: border-box;
	}
}

.suggested-image {
	padding: 13px 20px;
	width: 100%;
	display: table;
	.image {
		vertical-align: middle;
		display: table-cell;
		padding: 0 10px;
		img {
			min-width: 40px;
			width: 100%;
			max-width: 120px;
			display: block;
			margin-left: auto;
			margin-right: auto;
			cursor: pointer;
		}
	}
}

.description {
	margin-top: 60px;
	white-space: pre-line;
}
</style>
