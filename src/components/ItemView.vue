<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator"
import { Item } from "@/types"

@Component
export default class ItemView extends Vue {
	@Prop() item?: Item
}
</script>

<template>
	<el-card :body-style="{ padding: '0px' }">
		<div class="img-wrapper">
			<img :src="require(`@/assets/img/${item.image}`)" class="image" />
		</div>
		<div class="item-main" style="padding: 14px;">
			<div>
				<span>{{ item.title }}</span>
			</div>
			<div class="price">
				<span>$ {{ item.defaultPrice }}</span>
			</div>
			<div class="button-wrapper">
				<el-button type="text" class="button">{{ $t("shop.addToCart") }}</el-button>
			</div>
		</div>
	</el-card>
</template>

<style lang="scss" scoped>
.item-main {
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
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
