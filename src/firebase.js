import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSUC9Q0JCZq7cbEUhMOGg_ZYymVsQCsWo",
  authDomain: "chat-7a471.firebaseapp.com",
  projectId: "chat-7a471",
  storageBucket: "chat-7a471.appspot.com",
  messagingSenderId: "10904190710",
  appId: "1:10904190710:web:a32bf9c602ff435f81f6d7",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
