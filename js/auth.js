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
        "auth/email-already-in-use": "Ye email pehle se registered hai. Login try karo.",
        "auth/invalid-email": "Email sahi format mein daalo.",
        "auth/weak-password": "Password kam se kam 6 characters ka hona chahiye.",
        "auth/user-not-found": "Ye email registered nahi hai.",
        "auth/wrong-password": "Password galat hai.",
        "auth/invalid-credential": "Email ya password galat hai.",
        "auth/popup-closed-by-user": "Google popup band ho gaya, dobara try karo.",
        "auth/too-many-requests": "Bahut attempts ho gaye, thodi der baad try karo.",
    };
    return map[error.code] || "Kuch galat ho gaya. Dobara try karo.";
}