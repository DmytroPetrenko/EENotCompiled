<template>
	<div class="service">
		<el-row :gutter="10">
			<el-col :xs="24" :sm="{ span: 20, offset: 2 }" :lg="{ span: 16, offset: 4 }"
				><div>
					<p>{{ $t("service.p1") }}</p>
				</div></el-col
			>
		</el-row>
		<el-row :gutter="10">
			<el-col :xs="24" :sm="{ span: 10, offset: 2 }" :lg="{ span: 4, offset: 4 }"
				><div>
					<img src="@/assets/img/maintenance.svg" alt="" />
					<h4>{{ $t("service.services.service1.h") }}</h4>
					<p>{{ $t("service.services.service1.p") }}</p>
				</div></el-col
			>
			<el-col :xs="24" :sm="10" :lg="4"
				><div>
					<img src="@/assets/img/high-voltage.svg" alt="" />
					<h4>{{ $t("service.services.service2.h") }}</h4>
					<p>{{ $t("service.services.service2.p") }}</p>
				</div></el-col
			>
			<el-col :xs="24" :sm="{ span: 10, offset: 2 }" :lg="{ span: 4, offset: 0 }"
				><div>
					<img src="@/assets/img/spring.svg" alt="" />
					<h4>{{ $t("service.services.service3.h") }}</h4>
					<p>{{ $t("service.services.service3.p") }}</p>
				</div></el-col
			>
			<el-col :xs="24" :sm="10" :md="10" :lg="4"
				><div>
					<img src="@/assets/img/airbag.svg" alt="" />
					<h4>{{ $t("service.services.service4.h") }}</h4>
					<p>{{ $t("service.services.service4.p") }}</p>
				</div></el-col
			>
		</el-row>
		<el-row :gutter="10">
			<el-col :xs="24" :sm="{ span: 20, offset: 2 }" :lg="{ span: 16, offset: 4 }"
				><div>
					<img id="mainImg" src="@/assets/img/main.jpg" alt="photo" /></div
			></el-col>
		</el-row>
		<el-row :gutter="10">
			<el-col :xs="24" :sm="{ span: 20, offset: 2 }" :lg="{ span: 16, offset: 4 }"
				><div>
					<p>{{ $t("service.p2") }}</p>
				</div></el-col
			>
		</el-row>
	</div>
</template>

<style lang="scss" scoped>
.el-col {
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
