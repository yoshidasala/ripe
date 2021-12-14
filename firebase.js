// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAPmBqfrlGfgPuYetZse3ZQeRx5Ws0aWo",
  authDomain: "ripe-ae5c4.firebaseapp.com",
  projectId: "ripe-ae5c4",
  storageBucket: "ripe-ae5c4.appspot.com",
  messagingSenderId: "893257840084",
  appId: "1:893257840084:web:ec78ed3ae49926d8ba9241",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

