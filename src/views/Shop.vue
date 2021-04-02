<template>
	<div class="shop">
		<div v-if="items">
			<el-row type="flex" justify="end">
				<el-col>
					<PopupView></PopupView>
				</el-col>
			</el-row>
			<el-row type="flex" justify="center">
				<el-col v-for="item in items" :key="item.id">
					<ItemView :item="item"></ItemView>
				</el-col>
			</el-row>
		</div>
		<div v-else>
			{{ $t("shop.empty-page") }}
		</div>
	</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import ItemView from "../components/ItemView.vue"
import PopupView from "../components/PopupView.vue"

@Component({
	components: {
		ItemView, PopupView
	},
})
export default class Shop extends Vue {
	items = [
		{
			id: 1,
			title: "Item1",
			description: "Lorem",
			defaultPrice: 100,
			image: "logo.png",
		},
		{
			id: 2,
			title: "Item2",
			description: "Lorem",
			defaultPrice: 200,
			image: "main.jpg",
		},
		{
			id: 3,
			title: "Item3",
			description: "Lorem",
			defaultPrice: 300,
			image: "logo.png",
		},
		{
			id: 4,
			title: "Item4",
			description: "Lorem",
			defaultPrice: 400,
			image: "logo.png",
		},
		{
			id: 5,
			title: "Item5",
			description: "Lorem",
			defaultPrice: 500,
			image: "main.jpg",
		},
		{
			id: 6,
			title: "Item6",
			description: "Lorem",
			defaultPrice: 600,
			image: "logo.png",
		},
	]
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
</style>
