<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator"
import { Item } from "@/types"

@Component
export default class ServiceItem extends Vue {
	@Prop() item?: Item
}
</script>

<template>
	<el-col :span="4">
		<img :src="item.images[item.id]" alt="" />
		<h4>{{ $t("service.services.service" + item.id + ".h") }}</h4>
		<p>{{ $t("service.services.service" + item.id + ".p") }}</p>
	</el-col>
</template>
