import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDSnkJ3xXyr811DLq3h7HvUdXRCgCL9K0c",
  authDomain: "quasar-todolist.firebaseapp.com",
  projectId: "quasar-todolist",
  storageBucket: "quasar-todolist.appspot.com",
  messagingSenderId: "860343978149",
  appId: "1:860343978149:web:a8654e031f9d37e2bfa54c",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
