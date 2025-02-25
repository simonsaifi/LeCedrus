// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import authentication
import { getDatabase } from "firebase/database";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBG_MreMJ_ihudHC32_16O4yAR35RQ4PVY",
  authDomain: "lecedrus-6fa0e.firebaseapp.com",
  databaseURL: "https://lecedrus-6fa0e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "lecedrus-6fa0e",
  storageBucket: "lecedrus-6fa0e.firebasestorage.app",
  messagingSenderId: "296265009186",
  appId: "1:296265009186:web:9d0a4d127fda8f5a38227b",
  measurementId: "G-JTCVSHNJYN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Initialize Authentication
const database = getDatabase(app);

// Export Firebase services
export { app, analytics, auth, database };
