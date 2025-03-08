
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";

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



//  logout page

// Import Firebase auth module if needed


  export default function logOut(){
  
    signOut(auth)
    .then(() => {
      console.log("User signed out successfully!");
      alert("Logged out successfully!");
      window.location.href = "signin.html"; // Redirect to login page
    })
    .catch((error) => {
      console.error("Error logging out:", error);
    });
  }









  
  // });
  
  // onAuthStateChanged(auth, (user) => {
  //   if (!user) {
  //     window.location.href = "signin.html"; // Redirect if not logged in
  //   }
  // });
  
  // export async function logout() {
    // const logoutBtn = document.getElementById("logoutButton");
    // logoutBtn.innerText = "Logging out..."; // Change button text
    // logoutBtn.disabled = true; // Prevent multiple clicks

    // try {
    //     await signOut(auth);
    //     console.log("User signed out successfully!");
    //     alert("✅ Logged out successfully!");
    //     window.location.href = "signin.html"; // Redirect to login page
    // } catch (error) {
    //     console.error("Logout Error:", error);
    //     alert("❌ Error logging out. Please try again later.");
    // } finally {
    //     logoutBtn.innerText = "Logout"; // Restore button text
    //     logoutBtn.disabled = false; // Re-enable button
    // }
// }
