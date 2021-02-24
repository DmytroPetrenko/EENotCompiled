<script lang="ts">
import { Vue, Component } from "vue-property-decorator"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"

library.add(faFacebook, faInstagram)

@Component({})
export default class HeaderComponent extends Vue {
	year: number = new Date().getFullYear()
}
</script>

<template>
	<el-footer height="auto">
		<el-row type="flex" justify="center" align="middle">
			<el-col :span="12">© Copyright {{ year }} ElectricEngines - All Rights Reserved</el-col>
			<el-col :span="6">
				<a href="https://www.facebook.com/ElectricEnginesCar">
					<font-awesome-icon :icon="['fab', 'facebook']" size="3x" />
				</a>
				<a href="https://www.instagram.com/electric_engines">
					<font-awesome-icon :icon="['fab', 'instagram']" size="3x" />
				</a>
			</el-col>
		</el-row>
	</el-footer>
</template>

<style lang="scss" scoped>
.el-footer {
	background-color: #545c64;
	flex-shrink: 0;
	padding: 0.5rem;
	color: white;
	a {
		text-decoration: none;
		color: white;
	}
	svg {
		padding: 10px;
	}
	.fa-facebook:hover {
		color: rgb(112, 162, 255);
	}
	.fa-instagram:hover {
		color: rgb(255, 112, 112);
	}
}
</style>
