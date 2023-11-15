import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUZPB-xKEut_0fXFLHEIg2KrJgpf8mjA0",
  authDomain: "atlegilemarketing.firebaseapp.com",
  projectId: "atlegilemarketing",
  storageBucket: "atlegilemarketing.appspot.com",
  messagingSenderId: "162373605376",
  appId: "1:162373605376:web:113cc9cade343ac9c360e5",
  measurementId: "G-9Z66TT7GSR"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const firestore = firebase.firestore(); // Get Firestore instance

export { firebase, firestore };
