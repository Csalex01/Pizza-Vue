<template>
  <div class="row main">
    <h2 class="teal-text darken-4">
      <i class="material-icons" style="font-size: 40px">home</i>
      Home
    </h2>
    <!-- <div class="row">
      <div class="col s12 m12 l12 xl12">
        <div class="row">
          <h4 class="col s12 teal-text darken-4">Today's special offer</h4>
        </div>
        <div class="row"></div>
      </div>
    </div>-->

    <div class="row">
      <div class="col s12 m12 l6 xl6">
        <div class="row">
          <h4 class="teal-text darken-4">About us</h4>
        </div>

        <div class="row">
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
          <h4 class="teal-text darken-4">Reviews</h4>
        </div>
        <div class="row">
          <div class="col s12">
            <div class="row">
              <p class="left-margin">
                <span class="teal-text darken-4">Person 1:</span>
                <span>One of the best out there!</span>
              </p>
            </div>
            <div class="row">
              <p class="left-margin">
                <span class="teal-text darken-4">Person 2:</span>
                <span>One of the best out there!</span>
              </p>
            </div>
            <div class="row">
              <p class="left-margin">
                <span class="teal-text darken-4">Person 3:</span>
                <span>One of the best out there!</span>
              </p>
            </div>
            <div class="row">
              <p class="left-margin">
                <span class="teal-text darken-4">Person 4:</span>
                <span>One of the best out there!</span>
              </p>
            </div>
            <div class="row">
              <p class="left-margin">
                <span class="teal-text darken-4">Person 5:</span>
                <span>One of the best out there!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
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
  text-align: justify;
}

.main {
  padding: 0 20px;
}

.left-margin {
  margin: 0 30px;
}
</style>