import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBJzb4It5Hdy3j7VLOTGOuqAmN0E2zNQ0Q",
  authDomain: "medicure-274f4.firebaseapp.com",
  projectId: "medicure-274f4",
  storageBucket: "medicure-274f4.appspot.com",
  messagingSenderId: "142660179211",
  appId: "1:142660179211:web:3b860072941fb016783e0e",
  measurementId: "G-SGPH7PFNWC"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export {auth, app};
