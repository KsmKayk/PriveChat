import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGXNvJb4c-K0E6RNpQfubWnFtBt02d2ek",
  authDomain: "prive-chat-60268.firebaseapp.com",
  projectId: "prive-chat-60268",
  storageBucket: "prive-chat-60268.appspot.com",
  messagingSenderId: "723233716260",
  appId: "1:723233716260:web:af0ebf1e49dccdfb1840b1",
  measurementId: "G-98PZHVJBWX",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
