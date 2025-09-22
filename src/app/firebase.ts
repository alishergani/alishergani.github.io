// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNLV5uKf_XuBL5rfpfVTR6jVirs23NYvU",
  authDomain: "visitors-count-789d7.firebaseapp.com",
  projectId: "visitors-count-789d7",
  storageBucket: "visitors-count-789d7.firebasestorage.app",
  messagingSenderId: "970265828499",
  appId: "1:970265828499:web:93190ae3b87bfa1c0ec166",
};

// чтобы не инициализировать повторно при hot reload
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);
