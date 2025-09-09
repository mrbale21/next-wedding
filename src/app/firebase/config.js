import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCARQxYMwfbRIhB9NvhqfUuaqM3oCiTA3g",
  authDomain: "wedding-project-24561.firebaseapp.com",
  projectId: "wedding-project-24561",
  storageBucket: "wedding-project-24561.firebasestorage.app",
  messagingSenderId: "873670578072",
  appId: "1:873670578072:web:543dd9d7152f06d23225ed",
  measurementId: "G-JBJSKTPHFG",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
