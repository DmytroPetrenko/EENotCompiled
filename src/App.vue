<template>
	<div id="app">
		<HeaderComponent v-if="$route.name != `404`"></HeaderComponent>
		<el-main>
			<router-view></router-view>
		</el-main>
		<FooterComponent v-if="$route.name != `404`"></FooterComponent>
	</div>
</template>

<script>
import HeaderComponent from "./components/layout/HeaderComponent.vue"
import FooterComponent from "./components/layout/FooterComponent.vue"
import "./assets/style/style.scss"

export default {
	name: "app",
	components: {
		HeaderComponent,
		FooterComponent,
	},
}
</script>

<style lang="scss" scoped>
.el-main {
	flex: 1 0 auto;
}
</style>
