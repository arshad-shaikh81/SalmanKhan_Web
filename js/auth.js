import { auth } from "./firebase-config.js";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    updateProfile,
} from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js";

const googleProvider = new GoogleAuthProvider();

/* ---------- Sign up with email + password ---------- */
export async function signup(name, email, password) {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    if (name) await updateProfile(cred.user, { displayName: name });
    return cred.user;
}

/* ---------- Log in with email + password ---------- */
export async function login(email, password) {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    return cred.user;
}

/* ---------- Log in with Google ---------- */
export async function loginWithGoogle() {
    const cred = await signInWithPopup(auth, googleProvider);
    return cred.user;
}

/* ---------- Log out (usable from any page) ---------- */
export async function logout() {
    await signOut(auth);
    window.location.href = "login.html";
}

/* ---------- Run a callback whenever auth state changes ---------- */
export function watchAuth(callback) {
    onAuthStateChanged(auth, callback);
}

/* ---------- Call at the top of a page that requires login ---------- */
export function requireAuth() {
    onAuthStateChanged(auth, (user) => {
        if (!user) window.location.href = "login.html";
    });
}

/* ---------- Friendly error messages for common Firebase auth codes ---------- */
export function friendlyAuthError(error) {
    const map = {
        "auth/email-already-in-use": "This email is already registered. Please try logging in.",
        "auth/invalid-email": "Please enter a valid email address.",
        "auth/weak-password": "Password must be at least 6 characters long.",
        "auth/user-not-found": "This email is not registered.",
        "auth/wrong-password": "Incorrect password.",
        "auth/invalid-credential": "Incorrect email or password.",
        "auth/popup-closed-by-user": "Google popup was closed. Please try again.",
        "auth/too-many-requests": "Too many attempts. Please try again later.",
    };
    return map[error.code] || "Something went wrong. Please try again.";
}