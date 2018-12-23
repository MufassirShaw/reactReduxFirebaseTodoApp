import firebase from 'firebase/app'
import "firebase/database"
  // Initialize Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyBnm89lbILcyKX7_QLkGs71xF_ROOU-A7I",
    authDomain: "reactreduxfirebasetodo.firebaseapp.com",
    databaseURL: "https://reactreduxfirebasetodo.firebaseio.com",
    projectId: "reactreduxfirebasetodo",
    storageBucket: "",
    messagingSenderId: "403544781214"
  };


  firebase.initializeApp(firebaseConfig);

  export default firebase;