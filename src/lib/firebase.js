// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// if (!firebase.apps.length){
const firebaseConfig = {
  apiKey: "AIzaSyDHhF6K7RH5kZXSz--IW6QKiyA-haIxIw8",
  authDomain: "doananhtuan-611aa.firebaseapp.com",
  projectId: "doananhtuan-611aa",
  storageBucket: "doananhtuan-611aa.appspot.com",
  messagingSenderId: "62046389158",
  appId: "1:62046389158:web:8ddb2f718cd5ba37c14567"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// }

// const app = initializeApp(firebaseConfig);
