// js/firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAa16xt5nZTIVNp_NRSZm388XT4hIVoF9k",
  authDomain: "crowntradeacademy-67be1.firebaseapp.com",
  projectId: "crowntradeacademy-67be1",
  storageBucket: "crowntradeacademy-67be1.firebasestorage.app",
  messagingSenderId: "943453710285",
  appId: "1:943453710285:web:1f4fa58eeab610aa4d4684",
  measurementId: "G-E6Z4VS9S8N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
