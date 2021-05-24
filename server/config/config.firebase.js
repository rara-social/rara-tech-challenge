const { firebase } = require("@firebase/app");
const firestore = require("@firebase/firestore");

const firebaseConfig = {
  appId: process.env.FIREBASE_APP_ID,
  messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  projectId: process.env.FIREBASE_PROJECT_ID,
  databaseURL: process.env.FIREBASE_DB_URL,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  apiKey: process.env.FIREBASE_API_KEY,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

module.exports = db;
