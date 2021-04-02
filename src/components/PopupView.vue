<script lang="ts">
import { Vue, Prop, Component } from "vue-property-decorator"
import { Item } from "@/types"

@Component
export default class CartView extends Vue {
	@Prop() item?: Item

	data() {
		return {}
	}
}
</script>

<template>
	<el-popover placement="right" width="400" trigger="click">
		<el-row>
			<el-col>
				Some text
			</el-col>
		</el-row>
		<el-button class="custom-icon" icon="el-icon-shopping-cart-2" slot="reference"></el-button>
	</el-popover>
</template>

<style lang="scss" scoped>
.custom-icon {
	font-size: 2rem;
}
.el-button {
	padding: 6px 10px;
}
</style>
