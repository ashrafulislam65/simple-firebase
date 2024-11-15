// Do not store config on the clint site
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjiNqZmuO1Q8gLU-FT3TiHKJBmsZcRXQc",
  authDomain: "simple-firebase-8a675.firebaseapp.com",
  projectId: "simple-firebase-8a675",
  storageBucket: "simple-firebase-8a675.firebasestorage.app",
  messagingSenderId: "576822443478",
  appId: "1:576822443478:web:6a1dacbe862aafe925b877"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth; 