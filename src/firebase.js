import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCzBW42aMCyQ1TbhA6o6mmEIkIWrT4T_ik",
  authDomain: "clone-25b24.firebaseapp.com",
  projectId: "clone-25b24",
  storageBucket: "clone-25b24.appspot.com",
  messagingSenderId: "298197054695",
  appId: "1:298197054695:web:cd58d04dcbb34add02de42",
  measurementId: "G-5N6JCYEDN8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };