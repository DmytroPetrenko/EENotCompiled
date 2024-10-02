<template>
	<div class="home">
		<div class="elfsight-app-0b842362-4c2a-4913-aae5-b20594c8c9ae"></div>
	</div>
</template>

<script>
export default {
	name: "Home",
	data() {
		return {
			sessionData: "",
		}
	},
	mounted() {
		// Завантажити дані з sessionStorage при завантаженні компонента
		this.sessionData = sessionStorage.getItem("originalUrl") || ""

		// Додати прослуховувач подій для відслідковування змін sessionStorage
		window.addEventListener("storage", this.handleStorageChange)

		const fbScript = document.createElement("script")
		fbScript.setAttribute("src", "https://apps.elfsight.com/p/platform.js")
		fbScript.setAttribute("defer", "")
		document.head.appendChild(fbScript)
	},
	beforeDestroy() {
		// Очистити прослуховувач подій при знищенні компонента
		window.removeEventListener("storage", this.handleStorageChange)
	},
	methods: {
		// Метод, який викликається при зміні sessionStorage
		handleStorageChange(event) {
			if (event.key === "originalUrl") {
				this.sessionData = event.newValue
				if (this.sessionData) {
					this.$router.push({ path: this.sessionData }) // Виконати навігацію до нового шляху
				}
			}
		},
	},
}
</script>
