// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, query, where, getDocs, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXTsT5HvT6jVhVJxmLThsNLS3SiPJ3w50",
  authDomain: "swi-firebase.firebaseapp.com",
  projectId: "swi-firebase",
  storageBucket: "swi-firebase.firebasestorage.app",
  messagingSenderId: "259900408581",
  appId: "1:259900408581:web:90566604779fd8783c6d6c",
  measurementId: "G-NKDM0ZG80L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, collection, query, where, getDocs, addDoc };