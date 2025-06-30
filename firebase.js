// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDLry8RmFoBcAjJgWmZ65Dw7FsXYQwTyv0",
  authDomain: "ngl-question.firebaseapp.com",
  projectId: "ngl-question",
  appId: "1:853655347927:web:81dc1a4511c708689f8692"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
