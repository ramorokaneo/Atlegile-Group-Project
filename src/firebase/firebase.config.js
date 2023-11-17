// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/firestore';
import firebase from 'firebase/compat/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUZPB-xKEut_0fXFLHEIg2KrJgpf8mjA0",
  authDomain: "atlegilemarketing.firebaseapp.com",
  projectId: "atlegilemarketing",
  storageBucket: "atlegilemarketing.appspot.com",
  messagingSenderId: "162373605376",
  appId: "1:162373605376:web:113cc9cade343ac9c360e5",
  measurementId: "G-9Z66TT7GSR",
};

if (!firebase.apps.legnth) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const FIRESTORE_DB = getFirestore(app);
// const storage =
const auth = initializeAuth(app);
const firestore = firebase.firestore();

export { FIRESTORE_DB, auth };
