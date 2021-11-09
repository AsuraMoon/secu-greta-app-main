import './registerServiceWorker'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import firebase from 'firebase/app';
import 'firebase/firestore'; // pour la base de données des cartes
import 'firebase/auth'; // pour l'authentification de l'admin



Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyAsB7TkkjZcG7wfk00DuzhJ1tsPbX6I-DA",
  authDomain: "login-vuejs-32f14.firebaseapp.com",
  projectId: "login-vuejs-32f14",
  storageBucket: "login-vuejs-32f14.appspot.com",
  messagingSenderId: "1045039495117",
  appId: "1:1045039495117:web:b23ff97d4b95ae0e52f684"
};
// Initialiser Firebase
firebase.initializeApp(firebaseConfig);
// definir constante pour faciliter la config des fonctions
const db = firebase.firestore();

db.settings({ timestampsInSnapdhots: true });

export default db;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

firebase.firestore().enablePersistence()
  .catch((err) => {
      if (err.code == 'failed-precondition') {
          // Multiple tabs open, persistence can only be enabled
          // in one tab at a a time.
          // ...
      } else if (err.code == 'unimplemented') {
          // The current browser does not support all of the
          // features required to enable persistence
          // ...
      }
  });
// Subsequent queries will use persistence, if it was enabled successfully