import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBIfOISAVSWHY1ATq2JxG6paHr9GaZ73HQ",
  authDomain: "pola-3b8ef.firebaseapp.com",
  projectId: "pola-3b8ef",
  storageBucket: "pola-3b8ef.appspot.com",
  messagingSenderId: "613091120239",
  appId: "1:613091120239:web:018e501a1d22bdeaf9e99a",
  measurementId: "G-7J72DZ9N19"
};

// Initialize Firebase
const app=initializeApp(firebaseConfig);
export const db = getFirestore(app)