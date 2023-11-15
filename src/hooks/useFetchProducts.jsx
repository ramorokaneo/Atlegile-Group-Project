import { useEffect, useState } from "react";
import {
  setDoc,
  doc,
  getDoc,
  getDocs,
  addDoc,
  query,
  where,
  collection,
  onSnapshot,
} from "firebase/firestore";
import { FIRESTORE_DB } from "../firebase/firebase.config";
// import auth from "../firebase/firebase.config.js";

export const useFetchProducts = () => {
  const [productData, setProductData] = useState([]);
  const [firebaseProducts, setFirebaseProducts] = useState(null);

  useEffect(() => {
    // const user = auth.currentUser;
    const colRef = collection(FIRESTORE_DB, "Products");

    // const q = query(colRef, where("userid", "==", user.uid));

    onSnapshot(colRef, (querySnapshot) => {
      const collection = [];
      querySnapshot?.docs.forEach((doc) => {
        collection.push({ ...doc.data(), key: doc.id });
      });
      collection.map((item) =>
        productData.push({ value: item.name, key: item.key })
      );
      console.log("ProductData : ", productData);
      setFirebaseProducts(collection);
    });
  }, []);

  return { productData, firebaseProducts };
};
