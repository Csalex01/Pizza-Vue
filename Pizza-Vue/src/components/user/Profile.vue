<template>
  <div class="row">
    <h2 class="teal-text darken-4">
      <i class="material-icons" style="font-size: 40px">account_circle</i>
      Profile
    </h2>

    <div class="row">
      <form class="col s12">
        <div class="col s4">
          <div class="row">
            <h4 class="teal-text darken-4">E-mail</h4>
            <div class="col s12">
              <div class="input-field">
                <input type="email" id="email" />
                <label for="email" class="req">Email</label>
              </div>
            </div>
          </div>
          <div class="row">
            <h4 class="teal-text darken-4">Name</h4>
            <div class="col s6">
              <div class="input-field">
                <input id="firstname" type="text" />
                <label for="firstname" class="req">First name</label>
              </div>
            </div>
            <div class="col s6">
              <div class="input-field">
                <input id="lastname" type="text" />
                <label for="lastname" class="req">Last name</label>
              </div>
            </div>
          </div>
        </div>
        <div class="col s4">
          <h4 class="teal-text darken-4">Change Password</h4>
          <div class="row">
            <div class="col s6">
              <div class="input-field">
                <input type="password" id="password" />
                <label for="password">Enter your new password</label>
              </div>
            </div>

            <div class="col s6">
              <div class="input-field">
                <input type="password" id="confirm_password" />
                <label for="confirm_password">Confirm your new password</label>
              </div>
            </div>
          </div>
        </div>
        <div class="col s4">
          <h4 class="teal-text darken-4">Credit/Debit Card Details</h4>
          <div class="row">
            <div class="col s6">
              <div class="input-field">
                <input type="text" id="cardholder_firstname" />
                <label for="cardholder_firstname" class="req">Cardholer's first name</label>
              </div>
            </div>
            <div class="col s6">
              <div class="input-field">
                <input type="text" id="cardholder_lastname" />
                <label for="cardholder_lastname" class="req">Cardholer's last name</label>
              </div>
            </div>
          </div>
          <div class="row">
            <h5 class="teal-text darken-4">Security</h5>
            <div class="col s6">
              <div class="input-field">
                <input type="text" id="cardnumber" />
                <label for="cardnumber" class="req">Card number</label>
              </div>
            </div>
            <div class="col s6">
              <div class="input-field">
                <input type="text" id="cvc2" />
                <label for="cvc2" class="req">CVC2/CVV</label>
              </div>
            </div>
          </div>
          <div class="row">
            <h5 class="teal-text darken-4">Expiry Date</h5>
            <div class="col s6">
              <div class="input-field">
                <input type="text" id="month" />
                <label for="month" class="req">Month</label>
              </div>
            </div>
            <div class="col s6">
              <div class="input-field">
                <input type="text" id="year" />
                <label for="year" class="req">Year</label>
              </div>
            </div>
          </div>
          <div class="row">
            <h5 class="teal-text darken-4">Billing Address</h5>
            <div class="input-field">
              <input type="text" id="address1" />
              <label for="address1" class="req">Address 1</label>
            </div>
          </div>
          <div class="row">
            <div class="input-field">
              <input type="text" id="address2" />
              <label for="address2">Address 2</label>
            </div>
          </div>
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
      firstname: null
    }
  }

}
</script>

<style>
.req::before {
  color: red;
  content: "* ";
}
</style>