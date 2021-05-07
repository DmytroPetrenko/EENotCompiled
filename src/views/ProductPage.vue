<template>
	<el-row type="flex" justify="center">
		<el-col :span="8">
			<el-row>
				<el-carousel :autoplay="false" trigger="click" indicator-position="none">
					<el-carousel-item v-for="image in product.images" :key="image">
						<img :src="require(`@/assets/img/${image}`)" class="image" />
					</el-carousel-item>
				</el-carousel>
			</el-row>
			<el-row class="suggested-image">
				<div class="image" v-for="image in product.images" :key="image">
					<img :src="require(`@/assets/img/${image}`)" />
				</div>
			</el-row>
		</el-col>
		<el-col :span="8">2</el-col>
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

	get product() {
		return this.getById(this.$route.params.id)
	}

	created() {
		this.getAllProducts()
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
	}
}

.suggested-image {
	margin: 5px 0;
	width: 100%;
	.image {
		max-width: 100px;
		height: 100%;
		float: left;
		margin: 0 5px;
		img {
			width: 100%;
		}
	}
}
</style>
