<template>
	<div class="home">
		<div class="elfsight-app-0b842362-4c2a-4913-aae5-b20594c8c9ae"></div>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"

@Component({
	components: {},
})
export default class Home extends Vue {
	mounted() {
		const fbScript = document.createElement("script")
		fbScript.setAttribute("src", "https://apps.elfsight.com/p/platform.js")
		fbScript.setAttribute("defer", "")
		document.head.appendChild(fbScript)
	}
}
</script>
