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

export const useFetchSingleProduct = (userKey) => {
  //   const [SingleProductData, setSingleProductData] = useState([]);
  //   const [firebaseSingleProducts, setFirebaseSingleProducts] = useState(null);
  const [singleProduct, setSingleProduct] = useState(null);

  useEffect(() => {
    const docRef = doc(FIRESTORE_DB, "Products", userKey);
    // getDoc(docRef).then((doc)=>)
    onSnapshot(docRef, (doc) => {
      setSingleProduct(doc.data());
      //   console.log(doc.data());
    });
  }, []);

  return { singleProduct };
};
