<template>
	<div class="pageNotFound">
		<div class="inner">
			<h1>404</h1>
			<p>Page not found. Back to home page</p>
			<p>
				<el-button type="primary">
					<router-link to="/">Back to home</router-link>
				</el-button>
			</p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.pageNotFound {
	display: flex;
	height: 100%;
}
.inner {
	margin: auto;
}
h1 {
	font-size: 130px;
	letter-spacing: 20px;
	margin: 20px;
}
p {
	font-size: 18px;
	text-align: center;
}
a {
	text-decoration: none;
	color: inherit;
}
</style>
