// src/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY || "AIzaSyAJBVh2PH6Uri4tNyHF5F3XFn-hBCyY0WI",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN || "rohith-59f34.firebaseapp.com",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID || "rohith-59f34",
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET || "rohith-59f34.firebasestorage.app",
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID || "347642983569",
  appId: process.env.REACT_APP_FIREBASE_APP_ID || "1:347642983569:web:a1dfaa991c2f3c7bf9bb30"
};

console.log("Firebase config:", firebaseConfig);
console.log("Environment variables:", {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY ? "✅ Set" : "❌ Missing",
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ? "✅ Set" : "❌ Missing",
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ? "✅ Set" : "❌ Missing"
});

// Prevent re-initialization during fast refresh/HMR
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("Firebase initialized:", { app, auth, db });

// Persist auth indefinitely (until signOut), so users remain logged in across months
setPersistence(auth, browserLocalPersistence).catch(() => {
  // No-op: fallback to default persistence if setting fails
});

export default app;