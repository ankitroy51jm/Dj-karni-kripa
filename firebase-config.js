
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD3k4A8cOkFXtdxMTjevs8mQstTEHw80TY",
    authDomain: "dj-karni-kripa.firebaseapp.com",
    projectId: "dj-karni-kripa",
    storageBucket: "dj-karni-kripa.firebasestorage.app",
    messagingSenderId: "724610528893",
    appId: "1:724610528893:web:03f01f2f201f86e73da314",
    measurementId: "G-LQYG46DY95"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
