// src/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJBVh2PH6Uri4tNyHF5F3XFn-hBCyY0WI",
  authDomain: "rohith-59f34.firebaseapp.com",
  projectId: "rohith-59f34",
  storageBucket: "rohith-59f34.firebasestorage.app",
  messagingSenderId: "347642983569",
  appId: "1:347642983569:web:a1dfaa991c2f3c7bf9bb30"
};

// Prevent re-initialization during fast refresh/HMR
const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);

// Persist auth indefinitely (until signOut), so users remain logged in across months
setPersistence(auth, browserLocalPersistence).catch(() => {
  // No-op: fallback to default persistence if setting fails
});