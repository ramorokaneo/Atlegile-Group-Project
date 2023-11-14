// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore(app);
