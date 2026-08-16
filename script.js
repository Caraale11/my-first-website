const button = document.querySelector(".hero button");
button.addEventListener("click", function() {
    alert("Thanks for visiting my website");
});

const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", function() {
    document.querySelector(".about").scrollIntoView( {

    });
});

const contactform = document.getElementById("contactform");

contactform.addEventListener("submit", function(event) {event.preventDefault();
    alert("Thank you! Your message has been sent.");
});
 import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
 
 import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const firebaseConfig = {
apiKey: "AIzaSyB5nu0Ctzc7r1utYIYqxQ6AU8lRty0Z_g0",
 authDomain: "somali-wayn-e1713.firebaseapp.com",
 projectId: "somali-wayn-e1713",
 storageBuckey: "somali-wayn-e1713.firebasestorage.app",
 messagingSenderId: "246449590312",
 appId: "1:246449590312:web:422275aff3058caf63e51d"
};

const app = inlitializeApp(firebaseConfig);
const auth = getAuth(app);

const signUpBtn = document.getElementById("signUpBtn");
const loginBtn = document.getElementById("loginBtn");

const email = document.getElementById("authEmail");
const password = document.getElementById("authPassword");
const authMessage = document.getElementById("authMessage");

loginBtn.addEventListener("click", async function () {
    const { error } = await signInWithEmailAndPassword(
        auth,
        email.value,
        password.value,
    );
    if (error) {
        authMessage.textContent = error.message;
    } else {
        authMessage.textContent = "login successfully";
    }
});

signUpBtn.addEventListener("click", async function () {
    try {
        awiat createUserWithEmailAndPassword(
            auth,
            email.value,
            password.value,
        );

        authMessage.textContent = "Account created successfully!";
    } catch (error) {
        authMessage.textContent = error.messge;
    }
});