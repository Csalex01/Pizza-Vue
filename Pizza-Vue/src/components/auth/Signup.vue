<template>
	<div class="signup row">
		<form class="col s12">
			<div class="row">
				<h2 class="teal-text darken-4">Signup</h2>
			</div>
			<div class="row">
				<div class="input-field col s6">
					<input id="email" type="email" class="validate" v-model="email" />
					<label for="email">E-mail</label>
				</div>
				<div class="input-field col s6">
					<input id="password" type="password" class="validate" v-model="password" />
					<label for="password">Password</label>
				</div>
			</div>

			<div class="row">
				<div class="confirm-password input-field col s12 right">
					<input id="password" type="password" class="validate" v-model="confirmPassword" />
					<label for="password">Confirm Password</label>
				</div>
			</div>

			<div class="row">
				<div class="col s6 left">
					<h5 class="row billing-payment-header teal-text darken-4">Billing Information</h5>
					<div class="row input-field col s12">
						<input type="text" id="firstName" v-model="firstName" />
						<label for="firstName">Your first name</label>
					</div>
					<div class="row input-field col s12">
						<input type="text" id="lastname" v-model="lastName" />
						<label for="lastname">Your last name</label>
					</div>
					<div class="row input-field col s12">
						<input type="text" id="company" v-model="company" />
						<label for="company">Company</label>
					</div>
					<div class="row input-field col s12">
						<input type="text" id="address1" v-model="address1" />
						<label for="address1">Address 1</label>
					</div>
					<div class="row input-field col s12">
						<input type="text" id="address2" v-model="address2" />
						<label for="address2">Address 2</label>
					</div>
				</div>

				<div class="col s6 right">
					<h5 class="row billing-payment-header darken-4 teal-text">Payment Information</h5>
					<div class="row input-field col s12">
						<input type="text" placeholder="0000 0000 0000 0000" id="cardNumber" v-model="cardNumber" />
						<label for="cardNumber">Your card number</label>
					</div>
					<div class="row col">
						<div class="input-field col s6">
							<input type="text" placeholder="mm" id="month" v-model="month" />
							<label for="month">Month</label>
						</div>
						<div class="input-field col s6">
							<input type="text" placeholder="yy" id="year" v-model="year" />
							<label for="year">Year</label>
						</div>

						<div class="row input-field col s12">
							<input type="text" id="cvc2" v-model="cvc2" />
							<label for="cvc2">CVV2/CVC2</label>
						</div>
					</div>
				</div>
			</div>

			<div class="row col sm12">
				<h4 class="red-text">{{ feedback }}</h4>
			</div>
			<div class="row col s12">
				<button type="submit" class="btn" @click.prevent="signup">Signup</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	name: "Signup",
	data() {
		return {
			email: null,
			password: null,
			confirmPassword: null,
			firstName: null,
			lastName: null,
			company: null,
			address1: null,
			address2: null,
			cardNumber: null,
			month: null,
			year: null,
			cvc2: null,
			feedback: null
		}
	},
	methods: {
		signup() {
			console.log(
				this.email,
				this.password,
				this.confirmPassword,
				this.firstName,
				this.lastName,
				this.company,
				this.address1,
				this.address2,
				this.cardNumber,
				this.month,
				this.year,
				this.cvc2,
			)
		}
	}
}
</script>

<style>
.signup {
	max-width: 600px;
}

.confirm-password {
	max-width: 300px;
}

.billing-payment-header {
	margin: 15px 0;
}
</style>