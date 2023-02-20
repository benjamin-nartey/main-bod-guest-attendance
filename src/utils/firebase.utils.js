// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB05XTe1cBSXnTiUPC3AMki7O9nyzzDylE",
  authDomain: "visitors-app-9d157.firebaseapp.com",
  projectId: "visitors-app-9d157",
  storageBucket: "visitors-app-9d157.appspot.com",
  messagingSenderId: "372476253544",
  appId: "1:372476253544:web:b37fe6c5fd03d0c2f9f2dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore()