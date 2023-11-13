// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHunQhT1dpDmWLGubsfQwZGaE4SJkB02Q",
  authDomain: "atlegile-35a25.firebaseapp.com",
  projectId: "atlegile-35a25",
  storageBucket: "atlegile-35a25.appspot.com",
  messagingSenderId: "140459942721",
  appId: "1:140459942721:web:3df294e58375a0fa3ff7c0",
  measurementId: "G-Q47XMTPVK3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
