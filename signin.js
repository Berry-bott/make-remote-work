
// Import Firebase SDKs
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

import togglePassword from "./register.js";



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
// const app = initializeApp(firebaseConfig);
const auth = getAuth();


let username = document.getElementById('username');
let emailField = document.getElementById('email');
let passwordField = document.getElementById('password');
let checkbox = document.getElementById('checkbox');
let form = document.getElementById("form");

const errorMessages = {
    username: document.getElementById('error1'),
    email: document.getElementById('error2'),
    password: document.getElementById('error3'),
    checkbox: document.getElementById('error4')
};

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let isValid = true;

    let fields = [
        { input: username, error: errorMessages.username, message: "Username is required" },
        { input: emailField, error: errorMessages.email, message: "Email is required" },
        { input: passwordField, error: errorMessages.password, message: "Password is required" }
    ];

    // Check if fields are empty
    fields.forEach(field => {
        if (field.input.value.trim() === "") {
            field.error.innerText = field.message;
            field.error.style.color = "red";
            isValid = false;
        } else {
            field.error.innerText = "";
        }
    });

    // Checkbox validation (must be checked)
    if (!checkbox.checked) {
        errorMessages.checkbox.innerText = "You must agree to the terms";
        errorMessages.checkbox.style.color = "red";
        isValid = false;
    } else {
        errorMessages.checkbox.innerText = "";
    }

    if (!isValid) return;

    // Firebase Authentication Logic
    try {
        const email = emailField.value;  // Fetch email input
        const password = passwordField.value;  // Fetch password input

        const userName = `${username.value}`;

        // 🔹 Save full name in sessionStorage
        sessionStorage.setItem("username", userName);
        // console.log("Saved Name:", userName);

        let useNname = sessionStorage.getItem('username');
        console.log(useNname);

        let fullName = sessionStorage.getItem('fullName');
        console.log(fullName);

        if (fullName === useNname) {


            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Ensure the user has verified their email before allowing login
            // document.getElementById('submit').addEventListener('click', () => {
            //     alert('hi')
            // })
            if (user.emailVerified) {
                openPopup(   `Login Successful!  
                            Redirecting to home...`)
              
            } else {
                openPopup(`Please verify your email before logging in.`)
                // closePopup("Email Verification Required", "Please verify your email before logging in.");
            }
        } else {
            errorMessages.username.innerHTML = `Username mismatch`;
            errorMessages.username.style.color = "red";
        }
    }
    catch (error) {
        alert('Invalid Logins: ' + error.message);
        console.error(error.code, error.message);
    }
    togglePassword();
});

document.querySelector('.modal-overlay').addEventListener('click', closePopup)
document.querySelector('.close-btn').addEventListener('click', closePopup)
function closePopup() {
    document.querySelector('.modal-overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
    window.location.href = "home.html";

}
function openPopup(massage) {
    //   setTimeout(() => {
    //             }, 2000); 
    document.querySelector('.modal-overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
    document.getElementById('showModal').innerHTML = massage
  
}

// let closeBtn = document.querySelector('.modal-overlay')
// let closeBtn2 = document.querySelector('.close-btn')

// closeBtn.addEventListener('click', closePopup)
// closeBtn2.addEventListener('click', closePopup)

// function closePopup() {
//     document.querySelector('.modal-overlay').style.display = 'none';
//     document.getElementById('popup').style.display = 'none';
// }

// let welcomeText = document.getElementById('welcomeText')
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//     //   window.location.href = "signin.html"; // Redirect if not logged in
//     welcomeText.innerText = `Hi, ${user.email}!`;
//     }
//   });


// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Get authentication instance
// const auth = getAuth();

// Check if user is logged in
// onAuthStateChanged(auth, (user) => {
//     if (user) {
//         let welcomeText = document.getElementById('welcome_text');
//         welcomeText.innerText = `Hi, ${user.email}!`;
//     }
// });
