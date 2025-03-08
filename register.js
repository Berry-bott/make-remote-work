// import welcome from './script.js'

// 🛠️ Firebase setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

// Your Firebase configuration
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



let form = document.getElementById("form");
let fName = document.querySelector("#fName");
let lName = document.querySelector("#lName");
let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let checkbox = document.querySelector("#checkbox");

const errorMessages = {
    fName: document.getElementById("error1"),
    lName: document.getElementById("error2"),
    username: document.getElementById("error3"),
    email: document.getElementById("error4"),
    password: document.getElementById("error5"),
    checkbox: document.getElementById("error5")
};





// 🛠️ Attach validation to form submission
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;

    // Fields validation
    let fields = [
        { input: fName, error: errorMessages.fName, message: "First name is required" },
        { input: lName, error: errorMessages.lName, message: "Last name is required" },
        { input: username, error: errorMessages.username, message: "Last name is required" },
        { input: email, error: errorMessages.email, message: "Email is required" },
        { input: password, error: errorMessages.password, message: "Password is required" }
    ];

    fields.forEach(field => {
        let value = field.input.value.trim();
        if (value === "") {
            field.error.innerText = field.message;
            field.error.style.color = "red";
            isValid = false;
        } else {
            field.error.innerText = "";
        }
    });

    // 🛠️ Email format validation
    if (email.value.trim() !== "" && !/^\S+@\S+\.\S+$/.test(email.value)) {
        errorMessages.email.innerText = "Invalid email format";
        errorMessages.email.style.color = "red";
        isValid = false;
    }

    // 🛠️ Password validation: At least one letter, one number, and 6+ characters
    if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password.value) && password.value !== "") {
        errorMessages.password.innerText = "Password must contain at least one letter and one number";
        errorMessages.password.style.color = "red";
        isValid = false;

    }

    // 🛠️ Checkbox validation
    if (!checkbox.checked) {
        errorMessages.checkbox.innerText = "You must agree to the terms";
        errorMessages.checkbox.style.color = "red";
        isValid = false;
    } else {
        errorMessages.checkbox.innerText = "";
    }

    // 🚀 If everything is valid, proceed with Firebase signup
    if (isValid) {
        registerUser();
    }
});

// 🚀 Register user function
function registerUser() {
    const auth = getAuth(app);
    const userEmail = email.value;
    const userPassword = password.value;


    const fullName = `${username.value}`;

    // 🔹 Save full name in sessionStorage
    sessionStorage.setItem("fullName", fullName);
    console.log("Saved Name:", fullName);

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Account created successfully!");

            // Send verification email
            sendEmailVerification(user)
                .then(() => {
                    alert("Verification email sent! Please check your inbox.");
                    window.location.href = "signin.html";
                })
                .catch((error) => {
                    alert("Error sending verification email: " + error.message);
                });
        })
        .catch((error) => {
            alert("Error creating user: " + error.message);
        });
}

let togglePassword = document.querySelector(".toggle-password")
togglePassword.addEventListener("click", function () {
    let passwordInput = document.getElementById("password");

    let svg = togglePassword.querySelector("svg");
    if (passwordInput.type === "password" && svg.classList.contains("fa-eye")) {
        passwordInput.type = "text";
        svg.classList.replace("fa-eye", "fa-eye-slash"); // Change icon
    } else {
        passwordInput.type = "password";
        svg.classList.replace("fa-eye-slash", "fa-eye"); // Change icon back
    }
});

// Import Firebase SDKs
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
// import {
//     getAuth, createUserWithEmailAndPassword, updateProfile, sendEmailVerification
// } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
// import {
//     getFirestore, doc, setDoc
// } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-firestore.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyCEgR134K-jlERV8TkR7J9tS7QZ2A8MumU",
//     authDomain: "snap-project-deploy.firebaseapp.com",
//     projectId: "snap-project-deploy",
//     storageBucket: "snap-project-deploy.appspot.com",
//     messagingSenderId: "1072535964803",
//     appId: "1:1072535964803:web:399f87f7f09e3c9f421fb6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const db = getFirestore(app);

// // Form elements
// let form = document.getElementById("form");
// let fName = document.querySelector("#fName");
// let lName = document.querySelector("#lName");
// let email = document.querySelector("#email");
// let password = document.querySelector("#password");
// let checkbox = document.querySelector("#checkbox");

// const errorMessages = {
//     fName: document.getElementById("error1"),
//     lName: document.getElementById("error2"),
//     email: document.getElementById("error3"),
//     password: document.getElementById("error4"),
//     checkbox: document.getElementById("error5")
// };

// // Form submission
// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let isValid = true;

//     // Validate fields
//     let fields = [
//         { input: fName, error: errorMessages.fName, message: "First name is required" },
//         { input: lName, error: errorMessages.lName, message: "Last name is required" },
//         { input: email, error: errorMessages.email, message: "Email is required" },
//         { input: password, error: errorMessages.password, message: "Password is required" }
//     ];

//     fields.forEach(field => {
//         let value = field.input.value.trim();
//         if (value === "") {
//             field.error.innerText = field.message;
//             field.error.style.color = "red";
//             isValid = false;
//         } else {
//             field.error.innerText = "";
//         }
//     });

//     if (email.value.trim() !== "" && !/\S+@\S+\.\S+/.test(email.value)) {
//         errorMessages.email.innerText = "Invalid email format";
//         errorMessages.email.style.color = "red";
//         isValid = false;
//     }

//     if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password.value) && password.value !== "") {
//         errorMessages.password.innerText = "Password must contain at least one letter and one number";
//         errorMessages.password.style.color = "red";
//         isValid = false;
//     }

//     if (!checkbox.checked) {
//         errorMessages.checkbox.innerText = "You must agree to the terms";
//         errorMessages.checkbox.style.color = "red";
//         isValid = false;
//     } else {
//         errorMessages.checkbox.innerText = "";
//     }

//     if (isValid) {
//         registerUser();
//     }
// });

// // async function registerUser(fName, lName, email, password) {
// //     const fullName = `${fName} ${lName}`;
// //     try {
// //         const userCredential = await createUserWithEmailAndPassword(auth, email, password);
// //         const user = userCredential.user;

// //         // 🔹 Update displayName
// //         await updateProfile(user, { displayName: fullName });

// //         // 🔹 Store user info in Firestore
// //         await setDoc(doc(db, "users", user.uid), { fullName, email });

// //         // 🔹 Send verification email
// //         await sendEmailVerification(user);
// //         alert(`A verification email has been sent to ${email}.\nWelcome, ${fullName}!`);
// //         window.location.href = "signin.html";
// //     } catch (error) {
// //         alert("Error creating user: " + error.message);
// //         console.error(error.code, error.message);
// //     }
// // }


// async function registerUser(email, password, username) {
//   try {
//     const auth = getAuth();
//     // const db = getFirestore();

//     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
//     const user = userCredential.user;

//     // Update Firebase Authentication profile with the username (displayName)
//     // await updateProfile(user, { displayName: username });

//     // Store username in Firestore
//     // const userDocRef = doc(db, "users", user.uid);
//     // await setDoc(userDocRef, {
//     //   username: username,
//     //   // Add other user data as needed
//     // });

//     console.log("User registered successfully:", user);
//     window.location.href = "home.html"; // Redirect to home page
//   } catch (error) {
//     console.error("Error registering user:", error);
//     // Handle error (e.g., display error message)
//   }
// }