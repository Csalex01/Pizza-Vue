import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDp14JGkT7wTQQXaOjf2TxJBDvGkCi6EVA",
  authDomain: "pizza-vue-a1dc0.firebaseapp.com",
  databaseURL: "https://pizza-vue-a1dc0.firebaseio.com",
  projectId: "pizza-vue-a1dc0",
  storageBucket: "pizza-vue-a1dc0.appspot.com",
  messagingSenderId: "817068019136",
  appId: "1:817068019136:web:57186dffcf4629e86e8c25"
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp.firestore()
