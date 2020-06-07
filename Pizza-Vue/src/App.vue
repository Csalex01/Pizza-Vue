<template>
  <div id="app">
    <div class="center container">
      <!-- This part makes the 🍕PizzaVue🍕 loog possible -->
      <div class="iris hide-on-small-only">
        <div class="card transparent z-depth-0">
          <h2 class="title">
            🍕 Pizza
            <span class="teal-text text-darken-1">
              <img src="@/assets/images/logo.png" height="60px" />
              <span style="margin-left: -15px; font-size: 55px;">ue</span>
            </span>
            🍕
            <br />
          </h2>
          <span class="motto">" Better than Pizza Hut! "</span>
        </div>
      </div>

      <Navbar class="sticky" />

      <router-view class="content" />

      <Footer />
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/display/Footer";

export default {
  name: "App",
  components: { Navbar, Footer },
  watch: {
    '$route': (to, from) => {
      document.title = `${to.meta.title} | 🍕 PizzaVue 🍕` || "Home | 🍕 PizzaVue 🍕"
    }
  },
  beforeCreate() {
    document.title = `${this.$route.meta.title} | 🍕 PizzaVue 🍕`
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=B612:400,700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap");

body {
  overflow-y: scroll;
  background-color: #eef8ff;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
}

.container {
  width: 100%;
}

.content {
  min-height: 50vh;
}

.iris {
  width: 100%;
  background-image: url("assets/images/header.jpg");
  background-repeat: no-repeat;
  height: 200px;
  background-size: cover;
  object-fit: cover;
}

.iris h2 {
  width: 100%;
  padding-top: 71px;
  padding-bottom: 71px;
  background: rgba(230, 230, 230, 0.9);
}

#app {
  font-family: "Inconsolata", Helvetica, Arial, sans-serif;
}

.motto {
  position: absolute;
  bottom: 40px;
  transform: translateX(-50%);
  font-size: 25px;
  font-weight: 900;
  font-style: italic;
  color: gray;
  font-family: "Dancing Script", cursive;
}
</style>
