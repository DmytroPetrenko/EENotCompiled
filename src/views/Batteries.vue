<template>
	<div class="batteries">
		<el-row type="flex" justify="center" align="middle">
			<el-col :span="18">
				<p>{{ $t(`batteries.p1`) }}</p>
				<p>{{ $t(`batteries.p2`) }}</p>
				<ul>
					<li v-for="li in $t(`batteries.ul`)" :key="li">{{ li }}</li>
				</ul>
			</el-col>
		</el-row>
	</div>
</template>

<style lang="scss" scoped>
ul {
	list-style: none;
	padding: 0 20px;
}
</style>
