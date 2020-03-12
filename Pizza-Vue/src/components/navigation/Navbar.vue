<template>
  <div class="row">
    <nav class="navbar container red z-depth-2">
      <div class="nav-wrapper">
        <a data-target="slide-out" class="sidenav-trigger hide-on-med-and-up">
          <i class="material-icons">menu</i>
        </a>
        <ul id="nav-mobile" class="hide-on-small-only">
          <li class="left">
            <router-link :to="{ name: 'Index' }">
              Home
              <i class="material-icons left">home</i>
            </router-link>
          </li>
          <li class="left">
            <router-link :to="{ name: 'Order' }">
              Order
              <i class="material-icons left">add_shopping_cart</i>
            </router-link>
          </li>
          <li class="left">
            <router-link :to="{ name: 'Contact' }">
              Contact
              <i class="material-icons left">email</i>
            </router-link>
          </li>

          <div v-if="!loggedIn">
            <li class="right">
              <router-link :to="{ name: 'Signup' }" class="btn">Signup</router-link>
            </li>
            <li class="right">
              <router-link :to="{ name: 'Login' }">Login</router-link>
            </li>
          </div>
          <div v-else>
            <li class="right">
              <a @click="logout">
                Logout
                <i class="material-icons left">logout</i>
              </a>
            </li>
            <li class="right">
              <router-link :to="{ name: 'Profile' }">
                {{ name }}
                <i class="material-icons left">account_box</i>
              </router-link>
            </li>
          </div>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="slide-out">
      <li>
        <h5 class="teal-text">Navigation buttons</h5>
      </li>
      <li>
        <router-link :to="{ name: 'Index' }">Home</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Order' }">Order</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'Signup' }">Signup</router-link>
      </li>
      <li>
        <a @click="logout">Logout</a>
      </li>
      <li>
        <router-link :to="{ name: 'Login' }">Login</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import firebase from "firebase"
import db from "@/firebase/init"

export default {
  name: "Navbar",
  data() {
    return {
      loggedIn: false,
      isFixed: false,
      name: null
    };
  },
  methods: {
    async logout() {
      await firebase.auth().signOut()
      this.$router.push({ name: "Index" })
    }
  },
  async beforeMount() {
    await firebase
      .auth()
      .onAuthStateChanged(user => (this.loggedIn = user ? true : false))

    const user = await firebase.auth().currentUser

    if (user) {
      const ref = (user == null) ? null : await db.collection("users").doc(user.uid)

      ref.get().then(doc => {
        if (doc.exists) {
          const data = doc.data()
          this.name = `${data.firstName} ${data.lastName}`
        }
      }).catch(err => console.error(err))
    }
  },
  mounted() {
    $('.sidenav').sidenav()
  }

};
</script>

<style>
.navbar {
  width: 100%;
  padding: 0 20px 0 20px;
  margin-top: 0px;
  overflow: hidden;
}

.sidenav {
  margin-top: 56px;
}

.sidenav-overlay {
  z-index: 9;
}

.iris {
  margin: 0 0 5px 0;
}

.navbar a {
  transition: all 0.3s ease-in-out;
}

.navbar a:hover {
  padding: 0 25px 0 25px;
  transition: all 0.3s ease-in-out;
}

.navbar a:focus {
  box-shadow: none;
  border: none;
  outline: none;
  /* background-color: rgba(200, 0, 0, 0.5); */
}
</style>