<template>
  <div class="row">
    <h2 class="teal-text darken-4">Custom Order</h2>

    <form action class="col s12">
      <div class="col s6">
        <div class="row">
          <div class="col s12">
            <h4 class="teal-text darken-4">Pizza</h4>

            <Card
              v-if="pizza.name != null"
              :name="pizza.name"
              :description="pizza.description"
              :price="pizza.price"
              :toppings="pizza.toppings"
              :img_url="pizza.img_url"
              class="s12 offset-m3 m6"
            />

            <div class="row col s12">
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
            <div class="row col s12">
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
            <div class="row col s12">
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
            <h4 class="teal-text darken-4">Size</h4>
            <div class="row col s12">
              <p>
                <label for="small">
                  <input
                    type="radio"
                    id="small"
                    v-model="checked_size"
                    class="filled-in"
                    value="small"
                  />
                  <span>Small</span>
                </label>
              </p>

              <p>
                <label for="medium">
                  <input
                    type="radio"
                    id="medium"
                    v-model="checked_size"
                    class="filled-in"
                    value="medium"
                  />
                  <span>Medium</span>
                </label>
              </p>

              <p>
                <label for="large">
                  <input
                    type="radio"
                    id="large"
                    v-model="checked_size"
                    class="filled-in"
                    value="large"
                  />
                  <span>Large</span>
                </label>
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s12">
            <h4 class="teal-text darken-4">Drinks</h4>
            <div class="row col s12">
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

      <div v-if="feedback" class="row col s12">
        <Alert :status="this.status" :message="this.feedback"></Alert>
      </div>

      <div class="row col s12">
        <button type="submit" class="btn" @click.prevent="submitOrder">
          Submit
          <i class="material-icons right">done</i>
        </button>
        <button class="btn" @click.prevent="resetOrder">
          Reset
          <i class="material-icons right">cached</i>
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import firebase from "firebase"
import db from "@/firebase/init"

import Card from "@/components/display/Card"
import Alert from "../feedback/Alert"

export default {
  name: "Custom_Order",
  components: { Card, Alert },
  data() {
    return {
      available_toppings: [],
      available_countertops: [],
      available_drinks: [],
      available_pizzas: [],
      checked_toppings: [],
      checked_pizza: null,
      checked_countertops: null,
      checked_drink: null,
      checked_size: null,
      pizza: {},
      status: null,
      feedback: null
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
    },
    submitOrder() {
      this.feedback = "Your order is being processed right now.Please check your E-mail for further information!"
      this.status = "success"
    },
    resetOrder() {

      this.checked_countertops = this.available_countertops[0].id
      this.checked_pizza = this.available_pizzas[0].id
      this.checked_size = "small"
      this.checked_toppings = []
      this.checked_drink = null
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


    this.checked_pizza = this.available_pizzas[0].id
    this.checked_countertops = this.available_countertops[0].id
    this.checked_size = "small"
  },
  async beforeUpdate() {
    let index = this.available_pizzas.findIndex(el => el.id == this.checked_pizza)

    if (index == -1)
      return

    this.pizza.description = this.available_pizzas[index].data.description
    this.pizza.img_url = this.available_pizzas[index].data.img_url
    this.pizza.name = this.available_pizzas[index].data.name
    this.pizza.price = this.available_pizzas[index].data.price
    this.pizza.toppings = this.available_pizzas[index].data.toppings
    this.pizza.size = this.checked_size;

    // console.log(this.pizza);

  }
}
</script>

<style>
div > p {
  display: inline-block;
  margin: 10px 25px 0 0;
}
</style>