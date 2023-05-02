// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getUuid } from "../util/uuid.js";
import {
  collection,
  doc,
  getFirestore,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4CSaFpsx-LbxPF9dsHYNxd_6A4FYGg6w",
  authDomain: "don-t-ask-to-me.firebaseapp.com",
  projectId: "don-t-ask-to-me",
  storageBucket: "don-t-ask-to-me.appspot.com",
  messagingSenderId: "236632034722",
  appId: "1:236632034722:web:f76a11c77b7d20a87236fb",
  measurementId: "G-3S6SDL2LVR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getCollections = (collectionName) => {
  return getDocs(collection(db, collectionName));
};

export const getItem = (collectionName, key) => {
  return getDoc(doc(db, collectionName, key));
};

export const write = async (collectionId, title, content) => {
  try {
    setDoc(await doc(db, collectionId, getUuid().toString()), {
      title,
      content,
    });
  } catch (e) {
    console.log("Error");
    console.log(e);
  }
};

export const update = async (collectionId, id, title, content) => {
  setDoc(await doc(db, collectionId, id), {
    title,
    content,
  });
};

export const deleteItem = async (collectionId, id) => {
  await deleteDoc(doc(db, collectionId, id));
};
