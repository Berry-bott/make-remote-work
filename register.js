// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCEgR134K-jlERV8TkR7J9tS7QZ2A8MumU",
    authDomain: "snap-project-deploy.firebaseapp.com",
    projectId: "snap-project-deploy",
    storageBucket: "snap-project-deploy.firebasestorage.app",
    messagingSenderId: "1072535964803",
    appId: "1:1072535964803:web:399f87f7f09e3c9f421fb6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const submit = document.getElementById('submit');
submit.addEventListener('click', (event) => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    event.preventDefault();
    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            alert('account created successfully......')
            sendEmailVerification(user) // Sends verification email
                .then(() => {
                    window.alert("Verification email sent!");
                    window.location.href = "signin.html";
                })
                .catch((error) => {
                    window.alert("Error sending email:", error);
                });
        })
        .catch((error) => {
            alert("Error creating user:", error);

            // alert('A verification email has been sent. Please check your inbox and verify your email before logging in');
            // window.location.href = "signin.html"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            window.alert(errorMessage)
        })

})


