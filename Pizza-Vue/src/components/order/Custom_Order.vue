<template>
  <div class="row">
    <h3 class="teal-text darken-4">
      <i class="material-icons" style="font-size: 40px">add_shopping_cart</i>
      Custom Order
    </h3>

    <form action class="col s12">
      <div class="col s12 m12 l7 xl7">
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

            <div class="row col s12 flex-container">
              <div class="flex-item" v-for="pizza in available_pizzas" :key="pizza.id">
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
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col s12 m12 l5 xl5">
        <div class="row">
          <div class="col s12">
            <h4 class="teal-text darken-4">Toppings</h4>
            <div class="row col s12 flex-container">
              <div class="flex-item" v-for="topping in available_toppings" :key="topping.id">
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
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s12">
            <h4 class="teal-text darken-4">Countertops</h4>
            <div class="row col s12 flex-container">
              <div
                class="flex-item"
                v-for="countertop in available_countertops"
                :key="countertop.id"
              >
                <label :for="countertop.id">
                  <input
                    type="radio"
                    :id="countertop.id"
                    v-model="checked_countertop"
                    class="filled-in"
                    :value="countertop.id"
                  />
                  <span>{{ countertop.data.name }}</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s12">
            <h4 class="teal-text darken-4">Size</h4>
            <div class="row col s12">
              <div class="size-item">
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
              </div>

              <div class="size-item">
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
              </div>

              <div class="size-item">
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
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col s12">
            <h4 class="teal-text darken-4">Drinks</h4>
            <div class="row col s12 flex-container">
              <div class="flex-item" v-for="drink in available_drinks" :key="drink.id">
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
              </div>
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
  params: { param_pizza: "European" },
  data() {
    return {
      available_toppings: [],
      available_countertops: [],
      available_drinks: [],
      available_pizzas: [],
      checked_toppings: [],
      checked_pizza: null,
      checked_countertop: null,
      checked_drink: null,
      checked_size: null,
      pizza: {},
      status: null,
      feedback: null,
      user: null
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
    async getDocFromCollection(options) {
      const response = await db
        .collection(options.collectionName)
        .doc(options.docName)

      let document = null

      await response.get()
        .then((doc) => {
          if (doc.exists)
            document = doc.data()
        })
        .catch((err) => console.error(err))

      return document
    },
    async submitOrder() {
      const id = `order_${Date.now() % 100000}`

      let total = 0

      for (let topping of this.checked_toppings) {
        const data = await this.getDocFromCollection({
          collectionName: "available_toppings",
          docName: topping
        })

        total += data.price
      }

      let pizza = await this.getDocFromCollection({
        collectionName: "pizzas",
        docName: this.checked_pizza
      })

      let countertop = await this.getDocFromCollection({
        collectionName: "available_countertops",
        docName: this.checked_countertop
      })

      let drink = (this.checked_drink == null) ? { price: 0 } : await this.getDocFromCollection({
        collectionName: "available_drinks",
        docName: this.checked_drink
      })

      total += countertop.price
      total += drink.price
      total += pizza.price

      if (this.checked_size == "medium")
        total += 3
      else if (this.checked_size == "large")
        total += 6

      // console.log(countertop.price)
      // console.log(drink.price)
      // console.log(total)

      const response = await db
        .collection("orders")
        .doc(id)
        .set({
          uid: this.user.uid,
          toppings: this.checked_toppings,
          pizza: this.checked_pizza,
          countertop: this.checked_countertop,
          drink: this.checked_drink,
          size: this.checked_size,
          price: total,
          timestamp: new Date().toDateString()
        })


      this.feedback = `Your order is being processed at the moment. Your total is: ${total} RON`
      this.status = "success"

      // setInterval(() => this.$router.push({ name: "Index" }), 5000)
    },
    resetOrder() {
      this.checked_countertop = this.available_countertops[0].id
      this.checked_pizza = this.available_pizzas[0].id
      this.checked_size = "small"
      this.checked_toppings = []
      this.checked_drink = null
    }
  },
  async beforeMount() {
    this.user = firebase.auth().currentUser

    if (!this.user)
      this.$router.push({ name: "Login" })

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


    let index = (this.$route.params.param_pizza) ? this.available_pizzas.findIndex(el => el.id == this.$route.params.param_pizza) : 0
    this.checked_pizza = this.available_pizzas[index].id
    this.checked_countertop = this.available_countertops[0].id
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

  }
}
</script>

<style>
.size-item {
  display: inline-block;
}

.flex-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: space-around;
}

.flex-item {
  display: inline-block;
  width: 180px;
  text-align: left;
  margin: 0 auto;
}
</style>