import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCtreHlICwV7u_n2ITLkBzorZZVRtlszlA",
  authDomain: "chat-app-ff448.firebaseapp.com",
  projectId: "chat-app-ff448",
  storageBucket: "chat-app-ff448.appspot.com",
  messagingSenderId: "53857030198",
  appId: "1:53857030198:web:86f7cea4879a5f9b1b4897"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebaseApp.auth();
const firebaseDb = firebaseApp.database();

export default {
  firebaseAuth,
  firebaseDb
};
