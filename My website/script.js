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