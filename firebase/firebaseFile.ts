import 'firebase/firestore';

import firebase from "firebase/app";

const config  = {
    apiKey: "AIzaSyBSHDKdOTSGwlNUK0ma0RG-2hwjkUJpawQ",
    authDomain: "joa-palacios-portfolio.firebaseapp.com",
    projectId: "joa-palacios-portfolio",
    storageBucket: "joa-palacios-portfolio.appspot.com",
    messagingSenderId: "493105133569",
    appId: "1:493105133569:web:e4e64e882d4dc37426e800",
  
};

// const config  = {
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  
// };

if(!firebase.apps.length) {
    firebase.initializeApp(config);
} else {
    firebase.app(); // if already initialized, use that one
 }

const firestore = firebase.firestore();

export { firestore };

// export default firebase;

// export const getFirebase = () => {
//     return config;
// };
// export const getFirestore = () => {
//     // firebase.analytics();
//     return firebase.firestore(config);
// };