<template>
	<div class="contact">
		<el-row type="flex" class="row-bg" justify="center">
			<el-col :xs="{ span: 24 }" :sm="{ span: 12 }" :lg="{ span: 8 }">
				<div class="google-map">
					<iframe
						frameborder="0"
						style="border:0"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.6543544209985!2d30.364370687137253!3d50.42611455970844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cbf70ba726d1%3A0x4e0f2772c238edfe!2sElectric%20Engines!5e0!3m2!1sru!2sua!4v1574864388731!5m2!1sru!2sua"
						allowfullscreen=""
					>
					</iframe>
				</div>
			</el-col>
			<el-col :xs="{ span: 24 }" :sm="{ span: 12 }" :lg="{ span: 8 }">
				<h2>{{ $t("contact.h1") }}</h2>
				<div class="icon-message-block">
					<i class="el-icon-message"></i>
					<h4>{{ $t("contact.h2") }}</h4>
				</div>
				<div class="suggestions">
					<h5>{{ $t("contact.h3") }}</h5>
					<div class="contacts">
						<p>{{ $t("contact.phone") }}: +38 095 487 40 19</p>
						<p>Email: electricenginescar@gmail.com</p>
					</div>
				</div>
				<el-form method="POST" ref="form" :model="form">
					<el-form-item>
						<el-input
							name="name"
							:placeholder="$t(`contact.form.name`)"
							v-model="form.name"
							required
						></el-input>
					</el-form-item>
					<el-form-item>
						<el-input
							name="phone"
							:placeholder="$t(`contact.form.phone`)"
							v-model="form.phone"
							required
						></el-input>
					</el-form-item>
					<el-form-item>
						<el-input
							name="email"
							:placeholder="$t(`contact.form.email`)"
							v-model="form.email"
							required
						></el-input>
					</el-form-item>
					<el-form-item>
						<el-input
							name="message"
							type="textarea"
							:rows="5"
							:placeholder="$t(`contact.form.message`)"
							v-model="form.message"
							required
						></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="submitForm()">{{
							$t("contact.form.send")
						}}</el-button>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
	</div>
</template>

<script>
import axios from "axios"

export default {
	data() {
		return {
			form: {
				name: "",
				phone: "",
				email: "",
				message: "",
			},
		}
	},
	methods: {
		submitForm() {
			axios
				.post("https://serve-node-ee.herokuapp.com/contact", {
					name: this.form.name,
					phone: this.form.phone,
					email: this.form.email,
					message: this.form.message,
				})
				.then((response) => {
					const status = JSON.parse(response.data.response.status)
					console.log(status)

					//redirect logic
					if (status == "200") {
						this.$router.push("/")
					}
				})
				.catch((error) => {
					console.log(error)
					this.$router.push("/")
				})
		},
	},
}
</script>

<style lang="scss" scoped>
// prettier-ignore
@import url(https://fonts.googleapis.com/css?family=Rubik:300,300i,400,400i,500,500i,700,700i,900,900i&display=swap);
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
}
.google-map {
	height: 40rem;
	position: relative;
	iframe {
		height: 100%;
		width: 100%;
	}
}
h2 {
	font-family: "Rubik", sans-serif;
	font-size: 3rem;
	padding-bottom: 1rem !important;
	font-weight: 300;
	line-height: 1.2;
	margin-bottom: 0.5rem;
	margin-top: 0;
}
.icon-message-block {
	margin-bottom: 10px;
	padding-bottom: 1rem !important;
	.el-icon-message {
		display: inline-block;
		vertical-align: middle;
		font-size: 48px;
		padding-right: 1rem;
	}
	h4 {
		display: inline-block;
		vertical-align: middle;
		margin-bottom: 0;
		line-height: 1;
		font-style: italic;
		font-size: 1.5rem;
		margin-top: 0;
		font-weight: 300;
	}
}
.suggestions {
	padding-bottom: 1rem !important;
	h5 {
		font-family: "Rubik", sans-serif;
		font-size: 1rem;
		margin-bottom: 0.5rem;
		font-weight: 500;
		line-height: 1.2;
		margin-top: 0;
	}
	.contacts {
		color: #767676;
		font-family: "Rubik", sans-serif;
		font-size: 1rem;
		margin-top: 0;
		margin-bottom: 1rem;
		p {
			margin: 0;
		}
	}
}
</style>
