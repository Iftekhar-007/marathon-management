// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9Yy0WE7K9uleCN_ptb8UGDMGE8bhAG1I",
  authDomain: "marathon-hub-3bd7d.firebaseapp.com",
  projectId: "marathon-hub-3bd7d",
  storageBucket: "marathon-hub-3bd7d.firebasestorage.app",
  messagingSenderId: "347774686248",
  appId: "1:347774686248:web:3ca4f89097bc39adcd111d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
