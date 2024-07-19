import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCrQAiol85Sd38x6Us9LOUiZYCQore3rSw",
  authDomain: "web-undangan1.firebaseapp.com",
  databaseURL: "https://web-undangan1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "web-undangan1",
  storageBucket: "web-undangan1.appspot.com",
  messagingSenderId: "418768302312",
  appId: "1:418768302312:web:145a9c78ed8271c0e2d95d",
  measurementId: "G-4YD5357BR4",
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
