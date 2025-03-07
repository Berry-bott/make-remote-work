// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEgR134K-jlERV8TkR7J9tS7QZ2A8MumU",
    authDomain: "snap-project-deploy.firebaseapp.com",
    projectId: "snap-project-deploy",
    storageBucket: "snap-project-deploy.appspot.com",
    messagingSenderId: "1072535964803",
    appId: "1:1072535964803:web:399f87f7f09e3c9f421fb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Ensure auth is initialized

// Register event listener for login button
document.getElementById('submit').addEventListener('click', async (event) => {
    event.preventDefault(); // Prevent page reload
    
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Ensure the user has verified their email before allowing login
        if (user.emailVerified) {
            alert('Sign-in successful!');
            window.location.href = "index.html"; // Redirect to home page
        } else {
            alert('Please verify your email before logging in.');
        }

    } catch (error) {
        alert(error.message);
        // alert(error.code);
        console.error(error.code, error.message);
    }
});



