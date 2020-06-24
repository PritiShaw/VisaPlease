import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDndHTVrMOWpEjOVTF2273GwyTmjNVDexs",
    authDomain: "visa-please.firebaseapp.com",
    databaseURL: "https://visa-please.firebaseio.com",
    projectId: "visa-please",
    storageBucket: "visa-please.appspot.com",
    messagingSenderId: "906285988212",
    appId: "1:906285988212:web:a6f7931e1f05988fdf9421",
    measurementId: "G-TGEH50FMF6"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebaseApp.auth();
const firestore = firebase.firestore();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export {auth,firestore,googleAuth};
