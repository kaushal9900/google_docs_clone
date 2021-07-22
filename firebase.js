import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDr7dgQJ10T9QaIV7LT8DQkfgfX_Il09e0",
    authDomain: "docs-d83a4.firebaseapp.com",
    projectId: "docs-d83a4",
    storageBucket: "docs-d83a4.appspot.com",
    messagingSenderId: "368041732407",
    appId: "1:368041732407:web:6d95f20e887005b7b392b2"
  };



  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) :
  firebase.app();

  const db = app.firestore();

  export {db};