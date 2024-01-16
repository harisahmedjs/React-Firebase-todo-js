import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqWsHEmi-0wBfICJhWVxu8gNPUMCovD-U",
  authDomain: "react-firebase-todo-d7ff7.firebaseapp.com",
  projectId: "react-firebase-todo-d7ff7",
  storageBucket: "react-firebase-todo-d7ff7.appspot.com",
  messagingSenderId: "57758966721",
  appId: "1:57758966721:web:68cf3e81d72a23d10b4540",
  measurementId: "G-0Y5PB8JHZ9"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);