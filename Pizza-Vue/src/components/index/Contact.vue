<template>
  <div class="row">
    <div class="row">
      <h2 class="teal-text darken-4">
        <i class="material-icons" style="font-size: 40px">email</i>
        Contact
      </h2>
    </div>

    <div class="row">
      <div class="col s6 feedback">
        <h4 class="teal-text darken-4">Send us a feedback!</h4>
        <form action>
          <div class="input-field col s12">
            <i class="material-icons prefix">mode_edit</i>
            <textarea
              name="input_text"
              id="input_text"
              cols="30"
              rows="10"
              class="materialize-textarea"
            ></textarea>
            <label for="input_text">Enter your text here!</label>
            <a class="waves-effect waves-light btn" @click.prevent>Submit</a>

            <div class="row">
              <div class="col s12">
                <h5 class="teal-text darken-4">
                  Or you can e-mail us at
                  <span class="email">pizza@csalex.org</span>
                </h5>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="col s6 map">
        <h4 class="teal-text darken-4">Find us on Google Maps!</h4>
        <div class="row">
          <div class="col s12">
            <iframe
              width="600"
              height="450"
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD7c72gFgTC_GC9vPPNRCUw0g5GlibnViE&maptype=roadmap&q=High+School+Salamon+Erno,Gheorgheni"
            ></iframe>
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
iframe {
  border-radius: 10px;
  box-shadow: 5px 5px 10px #888;
}

textarea {
  border: 0;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  resize: vertical;
}

.email {
  font-style: italic;
  color: #00796b;
}
</style>