<template>
	<el-row type="flex" justify="center">
		<el-col :span="8">
			<el-carousel :autoplay="false" trigger="click">
				<el-carousel-item>
					1
					<!-- <img :src="require(`@/assets/img/${product.images[0]}`)" class="image" /> -->
				</el-carousel-item>
			</el-carousel>
		</el-col>
		<el-col :span="8">2</el-col>
	</el-row>
</template>

<script>
import { mapActions } from "vuex"

export default {}
</script>

<style lang="scss"></style>
