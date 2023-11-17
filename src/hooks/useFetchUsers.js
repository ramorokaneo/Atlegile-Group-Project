// import { useEffect, useState } from "react";
// import {
//   setDoc,
//   doc,
//   getDoc,
//   getDocs,
//   addDoc,
//   query,
//   where,
//   collection,
//   onSnapshot,
// } from "firebase/firestore";
// import { FIRESTORE_DB } from "../firebase/firebase.config";

// export default function useFetchUsers() {
//   const [usersData, setUsersData] = useState([]);
//   const [firebaseUserss, setFirebaseUserss] = useState(null);

//   useEffect(() => {
//     // const user = auth.currentUser;
//     const colRef = collection(FIRESTORE_DB, "Users");

//     // const q = query(colRef, where("userid", "==", user.uid));

//     onSnapshot(colRef, (querySnapshot) => {
//       const collection = [];
//       querySnapshot?.docs.forEach((doc) => {
//         collection.push({ ...doc.data(), key: doc.id });
//       });
//       collection.map((item) =>
//         usersData.push({ value: item.name, key: item.key })
//       );
//       console.log("UsersData : ", usersData);
//       setFirebaseUserss(collection);
//     });
//   }, []);

//   return { usersData, firebaseUserss };
// };

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
import { FIRESTORE_DB, storage } from "../firebase/firebase.config";
import { firebase, firestore } from "../firebase/firebase.config";

// import auth from "../firebase/firebase.config.js";

export const useFetchProfileData = (userId) => {
  const [userData, setUserData] = useState(null);
  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchData = async () => {
      //   const user = auth.currentUser;
      // const user = firebase.auth().currentUser;
      const colRef = collection(FIRESTORE_DB, "Users");
      const q = query(colRef, where("uid", "==", userId));

      // const querySnapshot = onSnapshot(q);
      // const data = querySnapshot.docs[0]?.data();
      onSnapshot(q, (querySnapshot) => {
        querySnapshot?.docs.forEach((doc) => {
          const data = doc.data();
          console.log("see the data : ", doc.data());
          let dataCol = [];
          dataCol.push(doc.data());
          setData(dataCol);
          //   console.log("data", data);
          setUserData(data);
        });
      });
      console.log("data profile: ", data);
    };

    fetchData();
  }, []);
  return { userData };
};
