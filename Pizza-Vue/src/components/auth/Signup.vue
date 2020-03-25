<template>
  <div class="signup row">
    <div class="row">
      <h2 class="teal-text darken-4">Signup</h2>
    </div>
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input
            id="email"
            type="email"
            class="validate"
            v-model="email"
            required
            aria-required="true"
          />
          <label for="email" class="req">E-mail</label>
        </div>
        <div class="input-field col s6">
          <input
            id="password"
            type="password"
            class="validate"
            v-model="password"
            required
            aria-required="true"
          />
          <label for="password" class="req">Password</label>
        </div>
      </div>

      <div class="row">
        <div class="input-field col s6 right">
          <input
            id="confirmPassword"
            type="password"
            class="validate"
            v-model="confirmPassword"
            required
            aria-required="true"
          />
          <label for="confirmPassword" class="req">Confirm Password</label>
        </div>
      </div>

      <div class="row">
        <h6
          class="class red-text lighten-4"
        >You can fill this out later, but you won't be able to order without valid billing information.</h6>
        <div class="col s6 left">
          <h5 class="row billing-payment-header teal-text darken-4">Billing Information</h5>
          <div class="row input-field col s12">
            <input
              type="text"
              id="firstName"
              v-model="firstName"
              class="validate"
              required
              aria-required="true"
            />
            <label for="firstName" class="req">Your first name</label>
          </div>
          <div class="row input-field col s12">
            <input
              type="text"
              id="lastname"
              v-model="lastName"
              class="validate"
              required
              aria-required="true"
            />
            <label for="lastname" class="req">Your last name</label>
          </div>
          <div class="row input-field col s12">
            <input type="text" id="company" v-model="company" class="validate" />
            <label for="company">Company</label>
          </div>
          <div class="row input-field col s12">
            <input type="text" id="address1" v-model="address1" />
            <label for="address1">Address 1</label>
          </div>
          <div class="row input-field col s12">
            <input type="text" id="address2" v-model="address2" class="validate" />
            <label for="address2">Address 2</label>
          </div>
        </div>

        <div class="col s6 right">
          <h5 class="row billing-payment-header darken-4 teal-text">Payment Information</h5>
          <div class="row input-field col s12">
            <input type="text" id="cardNumber" v-model="cardNumber" />
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
      <div class="row col s12">
        <p class="red-text right-align">* - required field</p>
      </div>
      <div class="row col s12" v-if="feedback">
        <!-- <p class="red-text">Error: {{ feedback }}</p> -->
        <Alert :status="this.status" :message="this.feedback"></Alert>
      </div>
      <div class="row col s12">
        <button type="submit" class="btn" @click.prevent="signup">Signup</button>
      </div>
    </form>
    <div class="row">
      <div class="col s12">
        <p class="teal-text darken-4">
          Already have an account?
          <router-link :to="{name: 'Login'}">Login</router-link>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
import db from "@/firebase/init"
import formValidator from "../CommonFunctions/FormValidator"

import slugify from "slugify"

import Alert from "../feedback/Alert"

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
      feedback: null,
      status: null,
    }
  },
  components: { Alert },
  methods: {
    validateForm() {
      this.feedback = null;

      const params = {
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        firstName: this.firstName,
        lastName: this.lastName,
        cardNumber: this.cardNumber,
        address1: this.address1,
        month: this.month,
        year: this.year,
        cvc2: this.cvc2,
        feedback: this.feedback
      }

      let requiredFields = {
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        firstName: this.firstName,
        lastName: this.lastName
      }


      const result = formValidator.validate(params, requiredFields)


      this.feedback = result.feedback

      if (this.feedback) {
        // console.log("Unsuccessful form validation!")
        this.status = "failure"
        return false;
      }

      // console.log("Successful form validation!")
      return true;
    },
    async signup() {
      const isValid = this.validateForm();

      console.log(isValid)

      if (!isValid) return

      try {
        const response = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        const user = response.user;

        let slug = slugify(`${this.firstName} ${this.lastName}`, {
          replacement: "-",
          lower: true
        })

        slug = `${slug}-${Date.now() % 10000}`

        const dbResponse = await db
          .collection("users")
          .doc(user.uid)
          .set({
            firstName: this.firstName,
            lastName: this.lastName,
            slug,
            cardNumber: this.cardNumber,
            month: this.month,
            year: this.year,
            cvc2: this.cvc2,
            address1: this.address1,
            address2: this.address2,
            uid: user.uid
          })
        this.$router.push({ name: "Index" })
      } catch (err) {
        this.feedback = "Please check your details and try again!"
      }
    }
  }
}
</script>

<style>
label {
  width: 100%;
}

.signup {
  max-width: 600px;
}

.billing-payment-header {
  margin: 15px 0;
}

.req::before {
  color: red;
  content: "* ";
}
</style>