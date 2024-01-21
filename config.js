import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBTUi-i_CnXg-ESFbnYpAn6_7QXiT8XgYQ",
    authDomain: "bike-5ba0e.firebaseapp.com",
    projectId: "bike-5ba0e",
    storageBucket: "bike-5ba0e.appspot.com",
    messagingSenderId: "6422946081",
    appId: "1:6422946081:web:2f5065c0bbdee3c0f81e60"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
