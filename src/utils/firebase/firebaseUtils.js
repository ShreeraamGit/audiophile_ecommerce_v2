import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC0AHjdIX5FsxSB7juBgAGXXRh_wfra8g",
  authDomain: "audiophile-aa6fc.firebaseapp.com",
  projectId: "audiophile-aa6fc",
  storageBucket: "audiophile-aa6fc.appspot.com",
  messagingSenderId: "464872162716",
  appId: "1:464872162716:web:ab4659b05694636e317459",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
