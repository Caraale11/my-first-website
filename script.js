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
https://kueucpqxmbkmfnvkcxsx.supabase.co
sb_publishable_iQl9IcX9q77Lpo1yXhe-HQ_jdYhmXwi
const signUpBtn = document.getElementById("signUpBtn");
const loginBtn = document.getElementById("loginBtn");
const authMessage = document.getElementById("authMessage");

signUpBtn = addEventListener("click", async function () {
    const email = document.getElementById("authEmail").value;
    const password = document.getElementById("authPassword").value;

    const { error } = await supabaseClient.auth.signUp({
        email: email,
        password: password
    });

    if (error) {
        authMessage. textContent = errorr.message; 
    } else {
        authMessage. textCntent = "Account created successfully!";
    }
});

loginBtn.addEventListener("click", async function () {
    const email = document.getElementById("authEmail").value;
    const password = document.getElementById("authPassword").value;

    const { error } = await supabaseclient.auth.signInwithPassword({
        email: email,
        password: password
    });

    if (error) {
        authMessage. textContent = error.message;
    } else {
        authMessage. textContent = "Login successfully!";
    }
});