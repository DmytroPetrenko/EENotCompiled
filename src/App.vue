<template>
	<div id="app">
		<HeaderComponent></HeaderComponent>
		<router-view></router-view>
	</div>
</template>

<script>
import HeaderComponent from "./components/layout/HeaderComponent.vue"

export default {
	name: "app",
	components: {
		HeaderComponent,
	},
}
</script>

<style lang="scss" scoped>
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
