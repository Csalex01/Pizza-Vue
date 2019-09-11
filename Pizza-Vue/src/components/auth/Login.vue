<template>
	<div class="login row">
		<form class="col s12">
			<div class="row">
				<h2 class="teal-text darken-4">Login</h2>
			</div>
			<div class="row input-field col s12">
				<input id="email" type="email" class="validate" v-model="email" />
				<label for="email">E-mail</label>
			</div>
			<div class="row input-field col s12">
				<input id="password" type="password" class="validate" v-model="password" />
				<label for="password">Password</label>
			</div>
			<div class="row col sm12">
				<h4 class="red-text">{{ feedback }}</h4>
			</div>
			<div class="row col s12">
				<button type="submit" class="btn" @click.prevent="login">Login</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: "Login",
	data() {
		return {
			email: null,
			password: null,
			feedback: null
		}
	},
	methods: {
		login() {
			console.log(this.email, this.password)
		}
	}
}
</script>

<style>
.login {
	max-width: 400px;
}
</style>