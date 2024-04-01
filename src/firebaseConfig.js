import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBWDuA_j15gKTwOXqkZZQ0stWZETeZFydg",
    authDomain: "placementportal-32ced.firebaseapp.com",
    databaseURL: "https://placementportal-32ced-default-rtdb.firebaseio.com/",
    projectId: "placementportal-32ced",
    storageBucket: "placementportal-32ced.appspot.com",
    messagingSenderId: "397452433558",
    appId: "1:397452433558:web:ac46af213c36af57220ab7"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);
export {database,auth};