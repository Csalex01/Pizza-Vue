<template>
  <div class="row">
    <h2 class="teal-text darken-4">
      <i class="material-icons" style="font-size: 40px">account_circle</i>
      Profile
    </h2>

    <div class="row">
      <form class="col s12">
        <div class="col s12 m12 l4 xl4">
          <div class="row">
            <h4 class="teal-text darken-4">E-mail</h4>
            <div class="col s12">
              <div class="input-field">
                <input
                  type="email"
                  id="email"
                  v-model="email"
                  class="validate"
                  required
                  aria-required="true"
                />
                <label for="email" class="req">Email</label>
              </div>
            </div>
          </div>
        </div>

        <div class="col s12 m12 l4 xl4">
          <h4 class="teal-text darken-4">Password</h4>
          <div class="row">
            <div class="col s6">
              <div class="input-field">
                <input type="password" id="password" />
                <label for="password">New password</label>
              </div>
            </div>

            <div class="col s6">
              <div class="input-field">
                <input type="password" id="confirm_password" />
                <label for="confirm_password">New Password (x2)</label>
              </div>
            </div>
          </div>
        </div>

        <div class="col s12 m12 l4 xl4">
          <h4 class="teal-text darken-4">Card Details</h4>
          <div class="row">
            <div class="col s6">
              <div class="input-field">
                <input
                  type="text"
                  id="firstname"
                  v-model="firstName"
                  class="validate"
                  required
                  aria-required="true"
                />
                <label for="firstname" class="req">First name</label>
              </div>
            </div>
            <div class="col s6">
              <div class="input-field">
                <input
                  type="text"
                  id="lastname"
                  v-model="lastName"
                  class="validate"
                  required
                  aria-required="true"
                />
                <label for="lastname" class="req">Last name</label>
              </div>
            </div>
          </div>
          <div class="row">
            <h5 class="teal-text darken-4">Security</h5>
            <div class="col s6">
              <div class="input-field">
                <input type="text" id="cardnumber" v-model="cardNumber" />
                <label for="cardnumber">Card number</label>
              </div>
            </div>
            <div class="col s6">
              <div class="input-field">
                <input type="text" id="cvc2" v-model="cvc2" />
                <label for="cvc2" class="req">CVC2/CVV</label>
              </div>
            </div>
          </div>
          <div class="row">
            <h5 class="teal-text darken-4">Expiry Date</h5>
            <div class="col s6">
              <div class="input-field">
                <input type="text" id="month" v-model="month" />
                <label for="month">Month</label>
              </div>
            </div>
            <div class="col s6">
              <div class="input-field">
                <input type="text" id="year" v-model="year" />
                <label for="year">Year</label>
              </div>
            </div>
          </div>
          <div class="row">
            <h5 class="teal-text darken-4">Billing Address</h5>
            <div class="input-field">
              <input type="text" id="address1" v-model="address1" />
              <label for="address1">Address 1</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field">
              <input type="text" id="address2" v-model="address2" />
              <label for="address2">Address 2</label>
            </div>
          </div>
        </div>

        <div class="row col s12">
          <p class="red-text right-align">* - required field</p>
        </div>

        <div class="row">
          <div class="col s12">
            <button type="submit" class="btn" @click.prevent>Save changes</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
import db from '@/firebase/init'

export default {
  name: "Profile",
  data() {
    return {
      email: null,
      password: null,
      confirmPassword: null,
      company: null,
      address1: null,
      address2: null,
      cardNumber: null,
      firstName: null,
      lastName: null,
      month: null,
      year: null,
      cvc2: null,
      feedback: null,
      status: null,
      user: null,
      doc: null
    }
  },
  methods: {

  },
  async beforeMount() {
    this.user = firebase.auth().currentUser

    if (!this.user)
      this.$router.push({ name: "Login" })

    const response = await db
      .collection("users")
      .doc(this.user.uid)

    await response.get()
      .then(doc => {
        if (doc.exists)
          this.doc = doc.data()
      })

    this.email = this.user.email
    this.lastNam = this.doc.lastName
    this.company = this.doc.company
    this.address1 = this.doc.address1
    this.address2 = this.doc.address2
    this.cardNumber = this.doc.cardNumber
    this.firstName = this.doc.firstName
    this.lastName = this.doc.lastName
    this.month = this.doc.month
    this.year = this.doc.year
    this.cvc2 = this.doc.cvc2

    // Updates the Materialize labels.
    // Adds M.updateTextFields() to the Event Queue
    // on an other thread, thus making it possible
    // to execute the function call simutaneously
    // while the main loop executes from the main thread's queue.
    // This enables us to update the labels instantaneously. 
    await setTimeout(() => window.M.updateTextFields(), 0);
  },
}
</script>

<style>
.req::before {
  color: red;
  content: "* ";
}
</style>