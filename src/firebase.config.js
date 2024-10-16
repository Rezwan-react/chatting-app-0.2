// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2sxY_8cZ-_tQW56LGDbH8MEY4_-yyk3w",
  authDomain: "chattingapp0-2.firebaseapp.com",
  projectId: "chattingapp0-2",
  storageBucket: "chattingapp0-2.appspot.com",
  messagingSenderId: "749180361855",
  appId: "1:749180361855:web:5b3c1fb24eaf57a55c334a",
  measurementId: "G-JVXC8LW0F1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export default database