// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBds04oKrnZ1gCEPRwTLS3bkEmORuaxpn0",
  authDomain: "minimini-67480.firebaseapp.com",
  projectId: "minimini-67480",
  storageBucket: "minimini-67480.appspot.com",
  messagingSenderId: "911439925818",
  appId: "1:911439925818:web:7fb51908e2e048914d9b03"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };
