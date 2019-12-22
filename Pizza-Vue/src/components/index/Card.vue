<template>
  <!-- <div class="row">
    <div class="col s12 m4">
      <div class="card small darken-1">
        <div class="card-content dark-text">
          <span class="card-title">Card Title</span>
          <p>
            I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.
          </p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
  </div>-->

  <div class="row">
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img src="https://materializecss.com/images/office.jpg" alt class="activator" />
        </div>
        <div class="card-content">
          <span class="card-title activator grey-text text-darken-4">
            Card title
            <i class="material-icons right">more_vert</i>
          </span>
          <p>Basic description about the product</p>
        </div>
        <div class="card-action">
          <a href="#">Order</a>
          <a href="#">Details</a>
        </div>
        <div class="card-reveal">
          <span class="card-title grey-text text-darken-4">
            Card title
            <i class="material-icons right">close</i>
          </span>
          <p>Here is some more information about this product that is only revealed once clicked on.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
</style>