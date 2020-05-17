<template>
  <div class="row main">
    <h3 class="teal-text darken-4">
      <i class="material-icons" style="font-size: 40px">home</i>
      Home
    </h3>
    <div class="row">
      <div class="col s12 m12 l6 xl6">
        <div class="row">
          <h4 class="teal-text darken-4">About Us</h4>
        </div>

        <div class="row about">
          <p>
            We are a small pizzeria located in Gheorgheni, Romania.
            You can expect quality products from us, baked with care and done with passion.
          </p>
          <p>We try our best to satisfy the customers and try to act accordingly based on their feedback.</p>
          <p>
            You can find out more about us, or you can give your feedback
            <router-link :to="{ name: 'Contact' }">here</router-link>.
          </p>
        </div>
      </div>

      <div class="col s12 m12 l6 xl6">
        <div class="row">
          <h4 class="teal-text darken-4">Current offers</h4>
        </div>
        <div class="row">
          <Slideshow class="slideshow"></Slideshow>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slideshow from "@/components/display/Slideshow"

export default {
  name: "Index",
  components: { Slideshow },
  data() {
    return {
    }
  }
}
</script>

<style>
span,
p {
  font-size: 20px;
}

.slideshow {
  margin: 0 auto;
}

.main {
  padding: 0 20px;
}
</style>