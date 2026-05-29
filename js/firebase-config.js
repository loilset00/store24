import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";

const firebaseConfig = {
  apiKey: "AIzaSyBbem9e3uL0H5JtbFrM8q_5xK8mz-5VcDI",
  authDomain: "store24-5c657.firebaseapp.com",
  projectId: "store24-5c657",
  storageBucket: "store24-5c657.firebasestorage.app",
  messagingSenderId: "524366256106",
  appId: "1:524366256106:web:2aff7066afabc4ccc58493",
  measurementId: "G-W6VST0LQVS"
};

const app = initializeApp(firebaseConfig);

export { app };