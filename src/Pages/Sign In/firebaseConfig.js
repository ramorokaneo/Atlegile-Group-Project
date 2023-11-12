// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
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
  clientId: "140459942721-2ust092ib4ab69884blse1293hk4h2dl.apps.googleusercontent.com", 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("profile");
googleProvider.addScope("email");

export { doc, app, googleProvider };
// export const db = getFirestore(app);
// export const storage = getStorage(app);

// export default app;
// export { doc };

export default app;
