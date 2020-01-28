<template>
  <div class="row">
    <nav class="navbar container red z-depth-2">
      <div class="nav-wrapper">
        <a href="#" data-target="mobile-demo" class="sidenav-trigger show-on-small-only">
          <i class="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" class="hide-on-small-only">
          <li class="left">
            <router-link :to="{ name: 'Index' }">Home</router-link>
          </li>
          <li class="left">
            <router-link :to="{ name: 'Order' }">Order</router-link>
          </li>

          <div v-if="!loggedIn">
            <li class="right">
              <router-link :to="{ name: 'Signup' }" class="btn waves-effect waves-light">Signup</router-link>
            </li>
            <li class="right">
              <router-link :to="{ name: 'Login' }" class="waves-effect waves-light">Login</router-link>
            </li>
          </div>
          <div v-else>
            <li class="right">
              <a @click="logout">Logut</a>
            </li>
            <li class="right">
              <router-link :to="{ name: 'Index' }" class="waves-effect waves-light">Profile</router-link>
            </li>
          </div>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo">
      <h5 class="teal-text">Navigation buttons</h5>
      <li>
        <router-link :to="{ name: 'Index' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Order' }">Order</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Signup' }" class="waves-effect waves-light">Signup</router-link>
      </li>
      <li>
        <a @click="logout">Logut</a>
      </li>
      <li>
        <router-link :to="{ name: 'Login' }" class="waves-effect waves-light">Login</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Navbar",
  data() {
    return {
      loggedIn: false,
      isFixed: false
    };
  },
  methods: {
    async logout() {
      const response = await firebase.auth().signOut()
      this.$router.push({ name: "Index" })
    }
  },
  async beforeMount() {
    await firebase
      .auth()
      .onAuthStateChanged(user => (this.loggedIn = user ? true : false))
  },
  mounted() {

  }
};
</script>

<style>
.navbar {
  width: 100%;
  padding: 0 20px 0 20px;
  margin-top: 5px;
}

li > a:focus {
  box-shadow: none;
  border: none;
  outline: none;
}
</style>