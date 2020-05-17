<template>
  <div class="row">
    <div class="row">
      <h3 class="teal-text darken-4">
        <i class="material-icons" style="font-size: 40px">email</i>
        Contact
      </h3>
    </div>

    <div class="row">
      <div class="col s12 m6 feedback">
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
              v-model="comment"
            ></textarea>
            <label for="input_text">Enter your text here!</label>
            <a class="waves-effect waves-light btn" @click.prevent="submitComment">Submit</a>

            <div class="row">
              <div class="col s12">
                <h5 class="teal-text darken-4">
                  Or you can e-mail us at
                  <span class="email">pizza@csalex.org</span>
                </h5>
              </div>
            </div>
            <div v-if="alertMessage" class="row col s12">
              <Alert :status="this.status" :message="this.alertMessage"></Alert>
            </div>
          </div>
        </form>
      </div>
      <div class="col s12 m6 map">
        <h4 class="teal-text darken-4">Find us on Google Maps!</h4>
        <div class="row">
          <div class="col s12 m12">
            <iframe
              height="450px"
              width="100%"
              frameborder="0"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD7c72gFgTC_GC9vPPNRCUw0g5GlibnViE&maptype=roadmap&q=High+School+Salamon+Erno,Gheorgheni"
            ></iframe>
          </div>
        </div>
        <div class="row">
          <span
            class="red-text"
            style="font-size: 15px;"
          >Disclaimer: PizzaVue is a fictional company, this is a placeholder.</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase"
import db from "@/firebase/init"

import Alert from "@/components/feedback/Alert"

export default {
  name: "Index",
  data() {
    return {
      comment: null,
      user: null,
      status: null,
      alertMessage: null
    }
  },
  components: { Alert },
  methods: {
    async submitComment() {
      const id = `feedback_${Date.now() % 100000}`

      if (this.comment) {
        const reponse = await db
          .collection("feedbacks")
          .doc(id)
          .set({
            uid: this.user.uid,
            comment: this.comment
          })

        this.status = "success"
        this.alertMessage = "We got your feedback. Thank you!"

        this.comment = null

      } else {
        this.status = "warning"
        this.alertMessage = "Please enter your feedback in the given field!"
      }
    }
  },
  async beforeMount() {
    this.user = firebase.auth().currentUser
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
  resize: vertical;
}

.email {
  font-style: italic;
  color: #00796b;
}
</style>