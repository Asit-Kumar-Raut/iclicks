import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDe6sLgRl0RZy_Hzw01LTkEaDHAPnpULIQ",
  authDomain: "iclicks-e2ba2.firebaseapp.com",
  projectId: "iclicks-e2ba2",
  storageBucket: "iclicks-e2ba2.firebasestorage.app",
  messagingSenderId: "940531091888",
  appId: "1:940531091888:web:abdea33cf57960044aae75",
  measurementId: "G-VBCTJK3PMJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
export const auth = getAuth(app);
export const db = getFirestore(app);
