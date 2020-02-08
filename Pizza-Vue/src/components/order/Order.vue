<template>
  <div class="row">
    <h2 class="teal-text darken-4">Order</h2>
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
        :name="pizza.data.name"
        :description="pizza.data.description"
        :price="pizza.data.price"
        :toppings="pizza.data.toppings"
        :img_url="pizza.data.img_url"
        class="m3"
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
    // console.log(this.pizzas, this.pizzas.length)
  }
};
</script>

<style>
</style>