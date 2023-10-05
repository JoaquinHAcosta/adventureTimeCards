// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQbuAUWxBk2GUyK-xC-cSmQeRG3H8U6sc",
  authDomain: "adventuretimewiki-2023.firebaseapp.com",
  projectId: "adventuretimewiki-2023",
  storageBucket: "adventuretimewiki-2023.appspot.com",
  messagingSenderId: "386427700880",
  appId: "1:386427700880:web:532374fc92593392563a15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)