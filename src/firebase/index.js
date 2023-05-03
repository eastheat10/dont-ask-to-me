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
  query,
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
export const db = getFirestore(app);

/**
 * firebase Collection 가져오기
 *
 * @param {string} collectionName
 * @returns firebase collection
 */
export const getCollections = async (collectionName) => {
  const items = await getDocs(collection(db, collectionName));
  return items;
};

/**
 *
 * @param {string} collectionsName
 * @param {firebase where} condition
 * @returns array
 */
export const getCollectionsWith = async (collectionsName, condition) => {
  const q = query(collection(db, collectionsName), condition);
  const items = await getDocs(q);
  return items;
};

/**
 * firebase Collection의 문서 하나 key로 가져오기
 *
 * @param {string} collectionName
 * @param {string} key
 * @returns
 */
export const getItem = async (collectionName, key) => {
  const item = await getDoc(doc(db, collectionName, key));
  return item;
};

/**
 * 새 문서 작성
 *
 * @param {string} collectionName
 * @param {string} title
 * @param {string} content
 */
export const write = async (collectionName, item) => {
  try {
    setDoc(await doc(db, collectionName, getUuid().toString()), item);
  } catch (e) {
    console.log("Write error");
    console.log(e);
  }
};

/**
 * 문서 업데이트 (덮어쓰기)
 *
 * @param {string} collectionName
 * @param {string} id
 * @param {string} title
 * @param {string} content
 */
export const update = async (collectionName, id, item) => {
  try {
    setDoc(await doc(db, collectionName, id), item);
  } catch (e) {
    console.log("Update Error");
    console.log(e);
  }
};

/**
 * 문서 삭제
 *
 * @param {string} collectionName
 * @param {string} id
 */
export const deleteItem = async (collectionName, id) => {
  await deleteDoc(doc(db, collectionName, id));
};
