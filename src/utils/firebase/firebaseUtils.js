import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signOut,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from "firebase/firestore";

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
export const auth = getAuth();

// Initialize Cloud Firestore and get a reference to the serviceœ
export const db = getFirestore(firebaseApp);

///signIN with google popup
const provider = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithFacebookPopup = () =>
  signInWithPopup(auth, providerFacebook);

export const signOutUserGoogle = () => signOut(auth, provider);
