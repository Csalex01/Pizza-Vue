<template>
  <div class="row">
    <h3 class="teal-text darken-4">
      <i class="material-icons" style="font-size: 40px">add_shopping_cart</i>
      Order
    </h3>
    <div v-if="loggedIn" class="row">
      <router-link :to="{ name: 'Custom_Order'}" class="btn waves-effect waves-light">Custom Order</router-link>
    </div>
    <div v-else class="row">
      <router-link
        :to="{ name: 'Login'}"
        class="btn waves-effect waves-light"
      >Please log in to submit an order</router-link>
    </div>
    <div v-for="pizza in pizzas" :key="pizza.id">
      <Card
        :id="pizza.id"
        :name="pizza.data.name"
        :description="pizza.data.description"
        :price="pizza.data.price"
        :toppings="pizza.data.toppings"
        :img_url="pizza.data.img_url"
        class="s12 m6 l4 xl4"
      />
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
import db from "@/firebase/init"
import Card from "@/components/display/Card"

export default {
  name: "Order",
  components: { Card },
  data() {
    return {
      pizzas: [],
      loggedIn: false
    };
  },
  async beforeMount() {
    await firebase
      .auth()
      .onAuthStateChanged(user => (this.loggedIn = user ? true : false))
    await db
      .collection("pizzas")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.pizzas.push({
            id: doc.id,
            data: doc.data()
          });
        });
      })
      .catch(err => console.error(err))
  }
};
</script>

<style>
</style>