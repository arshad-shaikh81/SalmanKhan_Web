// ============================================================
// FIREBASE CONFIG
// Go to: Firebase Console -> Project Settings -> Your web app
// -> "SDK setup and configuration" -> copy the values below.
// ============================================================
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyC3HyRGa5PyzTelMf7m8Gw-C6RiQjTHdzw",
    authDomain: "salmankhan-verse.firebaseapp.com",
    projectId: "salmankhan-verse",
    storageBucket: "salmankhan-verse.firebasestorage.app",
    messagingSenderId: "405714502733",
    appId: "1:405714502733:web:4de21f753981f4bac60804",
    measurementId: "G-9J6MNPS20V",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);