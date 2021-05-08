<template>
	<el-row :gutter="10">
		<el-col
			:xs="{ span: 24, offset: 0 }"
			:sm="{ span: 16, offset: 4 }"
			:md="{ span: 10, offset: 2 }"
		>
			<el-row>
				<el-carousel :autoplay="false" trigger="click" indicator-position="none" ref="carousel">
					<el-carousel-item v-for="image in product.images" :key="image" :name="image">
						<img :src="require(`@/assets/img/${image}`)" class="image" />
					</el-carousel-item>
				</el-carousel>
			</el-row>
			<el-row class="suggested-image">
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
			<h1>${{ product.price }}</h1>

			<div class="description">
				<el-divider content-position="left">{{ $t("shop.product.description") }}</el-divider>
				<p>{{ product.description }}</p>
			</div>
		</el-col>
	</el-row>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import { namespace } from "vuex-class"
const Products = namespace("products")

@Component({
	name: "ProductPage",
})
export default class ProductPage extends Vue {
	@Products.Getter getById: any
	@Products.Action getAllProducts: any
	get myCarousel(): any {
		return this.$refs.carousel
	}

	get product() {
		return this.getById(this.$route.params.id)
	}

	created() {
		this.getAllProducts()
	}

	setActiveItem(index) {
		this.myCarousel.setActiveItem(index)
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
		}
	}
}

.description {
	margin-top: 60px;
}
</style>
