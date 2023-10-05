import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDQbuAUWxBk2GUyK-xC-cSmQeRG3H8U6sc",
  authDomain: "adventuretimewiki-2023.firebaseapp.com",
  projectId: "adventuretimewiki-2023",
  storageBucket: "adventuretimewiki-2023.appspot.com",
  messagingSenderId: "386427700880",
  appId: "1:386427700880:web:532374fc92593392563a15",
  measurementId: "G-BE57QZS9VP"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()

export const db = getFirestore(app)