// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import Router from 'vue-router'

import App from './App'
import router from "./router/index"
import firebase from 'firebase'

let app = null


if (!app) {

  firebase.auth().onAuthStateChanged(user => {
    app = new Vue({
      el: '#app',
      router,
      components: {
        App
      },
      template: '<App/>'
    })
  })

  $('.sidenav').sidenav()
}
