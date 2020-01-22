<template>
  <div class="row">
    <h2 class="teal-text darken-4">Custom Order</h2>

    <form action class="col s12">
      <div class="col s6">
        <div class="row">
          <div class="col s12">
            <h4 class="teal-text darken-4">Pizza</h4>
            <div class="row col s12 topping">
              <p v-for="pizza in available_pizzas" :key="pizza.id">
                <label :for="pizza.id">
                  <input
                    type="radio"
                    :id="pizza.id"
                    v-model="checked_pizza"
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
                    v-model="checked_toppings"
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
                    v-model="checked_countertops"
                    class="filled-in"
                    :value="countertop.id"
                  />
                  <span>{{ countertop.data.name }}</span>
                </label>
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s12">
            <h4 class="teal-text darken-4">Drinks</h4>
            <div class="row col s12 topping">
              <p v-for="drink in available_drinks" :key="drink.id">
                <label :for="drink.id">
                  <input
                    type="radio"
                    :id="drink.id"
                    v-model="checked_drink"
                    class="filled-in"
                    :value="drink.id"
                  />
                  <span>{{ drink.data.name }}</span>
                </label>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row col s12">
        <button type="submit" class="btn" @click.prevent>Submit</button>
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
      available_drinks: [],
      checked_toppings: [],
      checked_pizza: null,
      checked_countertops: null,
      checked_drink: null,
      available_pizzas: []
    }
  },
  methods: {
    async getCollection(options) {
      await db
        .collection(options.name)
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            options.array.push({
              id: doc.id,
              data: doc.data()
            })
          })
        })
        .catch(err => console.error(err))
      console.log(options.array)
    }
  },
  async beforeMount() {
    await this.getCollection({
      name: "pizzas",
      array: this.available_pizzas
    })

    await this.getCollection({
      name: "available_toppings",
      array: this.available_toppings
    })

    await this.getCollection({
      name: "available_countertops",
      array: this.available_countertops
    })

    await this.getCollection({
      name: "available_drinks",
      array: this.available_drinks
    })
  }
}
</script>

<style>
.topping > p {
  display: inline-block;
  margin: 10px 25px 0 0;
}
</style>