
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyD5wWkwf-I2_U6C6xRBDq_4HQOu5XTFlXk",
    authDomain: "blog-app-87de8.firebaseapp.com",
    projectId: "blog-app-87de8",
    storageBucket: "blog-app-87de8.firebasestorage.app",
    messagingSenderId: "456403678471",
    appId: "1:456403678471:web:6777894a04e8e8a80841a2",
    measurementId: "G-RSZ8B0F7WE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth