import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
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

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
