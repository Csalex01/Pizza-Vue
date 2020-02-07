<template>
  <div id="app">
    <!-- https://pizzeria-volare.ro/wp-content/uploads/revslider/steweysfullslider/5.jpg -->
    <!-- https://lh3.googleusercontent.com/proxy/JAUWKadJ-45Zn_Jn_sXOb92hxRvhYV71vLlnnm7xdv1-XoEa_G0bAtVNy82EYrfoIyTEA67yGFz8Dcwp4T0yzNHu7tvOHz7anslgSObUA-9Ta80R12ZpATwvJ5q1nqorf0im -->
    <!-- http://www.tallheights.com/wp-content/uploads/2016/06/background_purple.jpg -->
    <!-- <div class="col left_ sticky hide-on-small-only">
      <img
        src="http://www.tallheights.com/wp-content/uploads/2016/06/background_purple.jpg"
        alt
        class="left_image"
      />
    </div>-->

    <!-- <div style="clear: both hide-on-small-only"></div> -->
    <div class="center container">
      <!-- This part makes the 🍕PizzaVue🍕 loog possible -->
      <div class="iris hide-on-small-only">
        <div class="card transparent z-depth-0">
          <h2 class="title">
            🍕 Pizza
            <span class="teal-text text-darken-1">
              <img src="@/assets/images/logo.png" height="50px" />
              <span style="margin-left: -20px ">ue</span>
            </span>
            🍕
          </h2>
        </div>
      </div>

      <Navbar class="sticky" />

      <router-view class="content" />

      <Footer />
    </div>

    <!-- <div class="side_banner">
      <div class="left_ sticky hide-on-small-only">
        <img src="http://www.tallheights.com/wp-content/uploads/2016/06/background_purple.jpg" alt />
    </div>-->
    <!-- <div class="col right_ sticky hide-on-small-only">RIGHT</div> -->
    <!-- <div class="right_ sticky hide-on-small-only">
        <img src="http://www.tallheights.com/wp-content/uploads/2016/06/background_purple.jpg" alt />
      </div>
    </div>-->
  </div>
</template>

<script>
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/display/Footer";

export default {
  name: "App",
  components: { Navbar, Footer }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=B612:400,700&display=swap");

/* :root {
  --left_right_height: 1000px; 
} */

body {
  overflow-y: scroll;
  background-color: whitesmoke;
  /* background-color: red; */
  /* background-image: -moz-linear-gradient(to bottom left, red, yellow);
  background-repeat: no-repeat;
  background-attachment: scroll; */
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;
}

.left_,
.right_ {
  width: 10%;
  top: 0px;
  /* height: 1000px; */
  /* background-image: url("http://www.tallheights.com/wp-content/uploads/2016/06/background_purple.jpg"); */
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
}

.left_ > img,
.right_ > img {
  width: 100%;
  height: 100%;
}

.left_ {
  /* left: 0; */
  transform: translateX(50%);
  float: left;
}

.right_ {
  /* margin: calc(var(--left_right_height) * (-2)) 0 0 90%; */
  /* right: 0; */
  transform: translate(-50%);
  float: right;
}

.container {
  width: 70%;
}

.content {
  /* position: relative; */
  min-height: 50vh;
  /* transform: translateY(calc(var(--left_right_height) * (-0.5))); */
  /* top: calc(var(--left_right_height) * (-0.45)); */
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
</style>
