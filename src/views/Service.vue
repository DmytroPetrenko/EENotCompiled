<template>
	<div class="service">
		<el-row type="flex" class="row-bg" justify="center">
			<el-col :span="16">
				<p>{{ $t("service.p1") }}</p>
			</el-col>
		</el-row>
		<el-row type="flex" class="row-bg" justify="center">
			<el-col :span="4">
				<img src="@/assets/img/maintenance.svg" alt="" />
				<h4>{{ $t("service.services.service1.h") }}</h4>
				<p>{{ $t("service.services.service1.p") }}</p>
			</el-col>
			<el-col :span="4">
				<img src="@/assets/img/high-voltage.svg" alt="" />
				<h4>{{ $t("service.services.service2.h") }}</h4>
				<p>{{ $t("service.services.service2.p") }}</p>
			</el-col>
			<el-col :span="4">
				<img src="@/assets/img/spring.svg" alt="" />
				<h4>{{ $t("service.services.service1.h") }}</h4>
				<p>{{ $t("service.services.service1.p") }}</p>
			</el-col>
			<el-col :span="4">
				<img src="@/assets/img/airbag.svg" alt="" />
				<h4>{{ $t("service.services.service2.h") }}</h4>
				<p>{{ $t("service.services.service2.p") }}</p>
			</el-col>
		</el-row>
		<el-row type="flex" class="row-bg" justify="center">
			<el-col :span="16">
				<img id="mainImg" src="@/assets/img/main.jpg" alt="photo" />
			</el-col>
		</el-row>
		<el-row type="flex" class="row-bg" justify="center">
			<el-col :span="16">
				<p>{{ $t("service.p2") }}</p>
			</el-col>
		</el-row>
	</div>
</template>

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
	min-width: 250px;
	padding: 0 20px;
	h4 {
		margin: 0;
	}
	img {
		width: 100px;
		height: 100px;
	}
	#mainImg {
		width: 100%;
		height: auto;
	}
}
</style>
