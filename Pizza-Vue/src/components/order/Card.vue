<template>
  <div class="col s12 m3">
    <div class="card">
      <div class="card-image waves-effect waves-block waves-light">
        <img src="../../assets/images/pizza_diavolo.jpg" alt class="activator" />
      </div>
      <div class="card-content">
        <span class="card-title activator grey-text text-darken-4">
          <span class="text-darken-4 m-4 red-text name">{{ this.name }}</span>
          <i class="material-icons right">more_vert</i>
          <span class="green-text text-darken-2 price">{{ `${this.price} €` }}</span>
          <span class="note activator">(Click for details)</span>
        </span>
      </div>
      <div class="card-action">
        <a href="#" class="btn activator waves-effect waves-light">Details</a>
        <a href="#" class="btn waves-effect waves-light">Order</a>
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
        <ul v-for="(topping, index) in toppings" :key="index">
          <li class="topping">
            <span>{{topping}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    name: null,
    description: null,
    price: null,
    toppings: null
  },
  data() {
    return {
    }
  },
  methods: {

  }
}
</script>

<style>
img {
  max-width: 450px;
  max-height: 450px;
}

hr {
  color: transparent;
  background-color: rgba(100, 100, 100, 0.5);
  max-width: 75%;
  border-radius: 100%;
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
  padding: 0px;
}

.note {
  display: inline;
  font-size: 18px;
  color: rgba(51, 51, 51, 0.5);
}
</style>