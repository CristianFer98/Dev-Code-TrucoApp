// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1inoH2lKgLflb42frvBLXOSI-i4J2cCw",
  authDomain: "trucochat-eac74.firebaseapp.com",
  projectId: "trucochat-eac74",
  storageBucket: "trucochat-eac74.appspot.com",
  messagingSenderId: "726558731238",
  appId: "1:726558731238:web:3e498362b37943d71bc427",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
