<template>
  <div class="row">
    <h2 class="teal-text darken-4">Custom Order</h2>

    <form action class="col s12">
      <div class="col s6">
        <div class="row">
          <div class="col s12">
            <h4 class="teal-text darken-4">Pizza</h4>
            <div class="row col s12 topping">
              <p v-for="pizza in pizzas" :key="pizza.id">
                <label :for="pizza.id">
                  <input
                    type="radio"
                    :id="pizza.id"
                    v-model="checkedPizza"
                    class="filled-in"
                    :value="pizza.id"
                  />
                  <span>{{ pizza.data.name }}</span>
                </label>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col s6">
        <div class="row">
          <div class="col s12">
            <h4 class="teal-text darken-4">Toppings</h4>
            <div class="row col s12 topping">
              <p v-for="topping in available_toppings" :key="topping.id">
                <label :for="topping.id">
                  <input
                    type="checkbox"
                    :id="topping.id"
                    v-model="checkedToppings"
                    class="filled-in"
                    :value="topping.id"
                  />
                  <span>{{ topping.data.name }}</span>
                </label>
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s12">
            <h4 class="teal-text darken-4">Countertops</h4>
            <div class="row col s12 topping">
              <p v-for="countertop in available_countertops" :key="countertop.id">
                <label :for="countertop.id">
                  <input
                    type="radio"
                    :id="countertop.id"
                    v-model="checkedCountertop"
                    class="filled-in"
                    :value="countertop.id"
                  />
                  <span>{{ countertop.data.name }}</span>
                </label>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase"
import db from "@/firebase/init"

export default {
  name: "Custom_Order",
  data() {
    return {
      available_toppings: [],
      available_countertops: [],
      checkedToppings: [],
      checkedPizza: [],
      pizzas: [],
      checkedCountertop: null
    }
  },
  methods: {},
  async beforeCreate() {
    await db
      .collection("pizzas")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.pizzas.push({
            id: doc.id,
            data: doc.data()
          })
        })
      })
      .catch(err => console.error(err))

    await db
      .collection("available_toppings")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.available_toppings.push({
            id: doc.id,
            data: doc.data()
          })
        })
      })
      .catch(err => console.error(err))

    await db
      .collection("available_countertops")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          this.available_countertops.push({
            id: doc.id,
            data: doc.data()
          })
        })
      })
      .catch(err => console.error(err))
  }
}
</script>

<style>
.topping > p {
  display: inline-block;
  margin: 10px 25px 0 0;
}
</style>