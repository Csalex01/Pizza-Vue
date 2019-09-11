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
			<div class="row col sm12" v-if="feedback">
				<p class="red-text left-align">Error: {{ feedback }}</p>
			</div>
			<div class="row col s12">
				<button type="submit" class="btn" @click.prevent="login">Login</button>
			</div>
		</form>
	</div>
</template>

<script>
import slugify from 'slugify'
import validator from 'validator'
import firebase from 'firebase'

export default {
	name: "Login",
	data() {
		return {
			email: null,
			password: null,
			feedback: null,
			isValid: false
		}
	},
	methods: {
		validateForm() {
			this.feedback = null

			if (this.email && !validator.isEmail(this.email))
				this.feedback = "E-mail incorrect!"

			if (!this.email || !this.password)
				this.feedback = "All required fields must be filled!"


			if (this.feedback) {
				console.log("Unsuccessful form validation!")
				return false
			}

			return true
		},
		async login() {
			const isValid = this.validateForm()

			if (!isValid)
				return

			try {
				await firebase.auth().signInWithEmailAndPassword(this.email, this.password)

				this.$router.push({ name: "Index" })
			} catch (err) {
				this.feedback = err.message
			}
		}
	}
}
</script>

<style>
.login {
	max-width: 400px;
}
</style>