import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyADu-wtzksX20nMLwZ9qAALTlwfMAXiS44",
  authDomain: "elporton-acdf2.firebaseapp.com",
  projectId: "elporton-acdf2",
  storageBucket: "elporton-acdf2.appspot.com",
  messagingSenderId: "332535120766",
  appId: "1:332535120766:web:a4a8f67c632f81f9aaa92f"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);