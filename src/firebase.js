// import firebase from 'firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "firebase/compat/firestore"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR67M9LbS8kKHN3W11pCbAY3dKDBhhG6M",
  authDomain: "picklekart-69e55.firebaseapp.com",
  projectId: "picklekart-69e55",
  storageBucket: "picklekart-69e55.appspot.com",
  messagingSenderId: "1090252754199",
  appId: "1:1090252754199:web:e1996ca495df2c9d26fb52",
  measurementId: "G-HS7BFVKF5V"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };