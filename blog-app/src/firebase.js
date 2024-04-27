// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: "mern-blog-39819.firebaseapp.com",
//   projectId: "mern-blog-39819",
//   storageBucket: "mern-blog-39819.appspot.com",
//   messagingSenderId: "721577046726",
//   appId: "1:721577046726:web:9fe3e8b9fd63346b711dc7"
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-blog-39819.firebaseapp.com",
  projectId: "mern-blog-39819",
  storageBucket: "mern-blog-39819.appspot.com",
  messagingSenderId: "721577046726",
  appId: "1:721577046726:web:9fe3e8b9fd63346b711dc7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
