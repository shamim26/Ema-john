// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0Rzq0CkUSqOBffGHbwJIWO8f-MPNUiRQ",
  authDomain: "ema-john-firebase-auth-fd91d.firebaseapp.com",
  projectId: "ema-john-firebase-auth-fd91d",
  storageBucket: "ema-john-firebase-auth-fd91d.appspot.com",
  messagingSenderId: "75465819155",
  appId: "1:75465819155:web:2477263ec4ee3f7d2f2be6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;