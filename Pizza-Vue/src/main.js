// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'

let app = null

if (!app) {

  firebase.auth().onAuthStateChanged(user => {
    /* eslint-disable no-new */
    app = new Vue({
      el: '#app',
      router,
      components: {
        App
      },
      template: '<App/>'
    })

    $('.sidenav').sidenav()

  })
}

Vue.config.productionTip = false
