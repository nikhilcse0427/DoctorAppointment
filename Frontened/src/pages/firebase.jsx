
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA57bS5uqJrcc0B7M-xZjxAHRudcgyK1j4",
  authDomain: "appointment-ea79b.firebaseapp.com",
  projectId: "appointment-ea79b",
  storageBucket: "appointment-ea79b.firebasestorage.app",
  messagingSenderId: "67417130645",
  appId: "1:67417130645:web:32260bf76b986e0ed47d9c",
  measurementId: "G-8CQMMZX0KB"
};


const app = initializeApp(firebaseConfig); 
export const auth = getAuth(app); 
export const db = getFirestore(app); 
export default app





