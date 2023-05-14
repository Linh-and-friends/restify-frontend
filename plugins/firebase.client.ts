import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: "AIzaSyC0In2d7py4vAKa1KLbUww3hVtzCN6Ur3c",
    authDomain: "restify-c3951.firebaseapp.com",
    projectId: "restify-c3951",
    storageBucket: "restify-c3951.appspot.com",
    messagingSenderId: "369580077404",
    appId: "1:369580077404:web:4f416bde685f813fc25199",
    measurementId: "G-G63SWLR0KN"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  nuxtApp.vueApp.provide('auth', auth);
  nuxtApp.provide('auth', auth);
  nuxtApp.vueApp.provide('firestore', firestore);
})