// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5o6BpI5EuJG-8nSntpSG0ilgSEToG9ts",
  authDomain: "tutor-7393c.firebaseapp.com",
  projectId: "tutor-7393c",
  storageBucket: "tutor-7393c.firebasestorage.app",
  messagingSenderId: "173260584285",
  appId: "1:173260584285:web:8702a23269de05dd0824b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
