// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-course-generator-66bfd.firebaseapp.com",
  projectId: "ai-course-generator-66bfd",
  storageBucket: "ai-course-generator-66bfd.appspot.com",
  messagingSenderId: "826761681492",
  appId: "1:826761681492:web:6ed72cd57e37688014ebc1",
  measurementId: "G-W3EGLSFW4T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);