<template>
  <div class="col s12 m3">
    <div class="card pizza-card">
      <div class="card-image waves-effect waves-block waves-light">
        <img :src="img_url" class="activator" />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          <span class="text-darken-4 m-4 red-text name">{{ this.name }}</span>
          <i class="material-icons right">more_vert</i>
          <span class="green-text text-darken-2 price">{{ `${this.price} RON` }}</span>
        </span>
      </div>
      <div class="card-action">
        <a href="#" @click.prevent class="btn activator waves-effect waves-light">
          Details
          <i class="material-icons right">info</i>
        </a>
        <router-link
          :to="{ name: 'Custom_Order', params: { param_pizza: this.id }}"
          v-if="loggedIn"
          class="btn waves-effect waves-light"
        >
          Order
          <i class="material-icons right">add_shopping_cart</i>
        </router-link>
      </div>
      <div class="card-reveal">
        <span class="card-title grey-text text-darken-4">
          <span class="text-darken-4 m-4 red-text name">{{ this.name }}</span>
          <i class="material-icons right">close</i>
        </span>
        <hr />
        <h4>Description</h4>
        <p class="description">{{ this.description }}</p>
        <h4>Toppings</h4>
        <ul>
          <li class="topping" v-for="(topping, index) in toppings" :key="index">
            <span>{{topping}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
import db from "@/firebase/init"

export default {
  name: "Card",
  props: {
    id: null,
    name: null,
    description: null,
    price: null,
    toppings: null,
    img_url: null,
  },
  data() {
    return {
      loggedIn: false
    }
  },
  methods: {},
  async beforeMount() {
    await firebase
      .auth()
      .onAuthStateChanged(user => (this.loggedIn = user ? true : false))
  }
}
</script>

<style>
img {
  max-width: 100%;
  max-height: 100%;
}

hr {
  color: transparent;
  background-color: rgba(100, 100, 100, 0.5);
  max-width: 75%;
  border-radius: 100%;
}

.pizza-card {
  min-height: 450px;
}

.card-action > a {
  margin: 10px 0 0 0;
}

.name {
  display: inline-block;
  font-size: 20;
}

.description {
  font-size: 15px;
}

.price {
  display: block;
  font-size: 13px;
}

.topping {
  font-size: 15px;
  margin: 5px auto;
}

.note {
  display: inline;
  font-size: 18px;
  color: rgba(51, 51, 51, 0.5);
}
</style>