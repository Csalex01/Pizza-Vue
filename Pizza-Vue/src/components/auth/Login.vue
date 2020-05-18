<template>
  <div class="login row">
    <div class="row">
      <h3 class="teal-text darken-4">
        <i class="material-icons" style="font-size: 40px">account_box</i>
        Login
      </h3>
    </div>
    <form class="col s12">
      <div class="row input-field col s12">
        <input id="email" type="email" class="validate" v-model="email" />
        <label for="email">E-mail</label>
      </div>
      <div class="row input-field col s12">
        <input id="password" type="password" class="validate" v-model="password" />
        <label for="password">Password</label>
      </div>
      <div class="row col s12" v-if="feedback">
        <Alert :status="this.status" :message="'Error: ' + this.feedback"></Alert>
      </div>
      <div class="row col s12">
        <button type="submit" class="btn" @click.prevent="login">Login</button>
      </div>

      <div class="row">
        <div class="col s12">
          <p class="teal-text darken-4">
            Not logged in?
            <router-link :to="{name: 'Signup'}">Sign up</router-link>
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import slugify from "slugify";
import validator from "validator";
import firebase from "firebase";
import Alert from "../feedback/Alert";

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password: null,
      feedback: null,
      isValid: false,
      status: null
    };
  },
  components: { Alert },
  methods: {
    validateForm() {
      this.feedback = null

      if (this.email && !validator.isEmail(this.email))
        this.feedback = "E-mail incorrect!"

      if (!this.email || !this.password)
        this.feedback = "All required fields must be filled!"

      if (this.feedback) {
        console.log("Unsuccessful form validation!")
        this.status = "failure"
        return false;
      }

      return true;
    },
    async login() {
      const isValid = this.validateForm()

      if (!isValid) return;

      try {
        await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
        // this.$router.go(-1)
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