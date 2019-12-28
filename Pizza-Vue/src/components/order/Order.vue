<template>
  <div class="row">
    <h2 class="teal-text darken-4">Order</h2>
    <div v-for="pizza in pizzas" :key="pizza.id">
      <Card
        :name="pizza.data.name"
        :description="pizza.data.description"
        :price="pizza.data.price"
        :toppings="pizza.data.toppings"
      />
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
import db from "@/firebase/init"
import Card from '@/components/order/Card'

export default {
  name: 'Order',
  components: { Card },
  data() {
    return {
      pizzas: []
    }
  },
  async beforeCreate() {
    await db.collection("pizzas").get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          this.pizzas.push({
            id: doc.id,
            data: doc.data()
          })
        })
      }).catch((err) => console.error(err))
    console.log(this.pizzas, this.pizzas.length)
  }
}
</script>

<style>
</style>