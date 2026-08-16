console.log("SCRIPT WAA SHAQAYNAYAA");

const clickMe = document.getElementById("clickMe");

const startBtn = document.getElementById("startBtn");

const contactform = document.getElementById("contactform");

clickMe.addEventListener("click", function () {

  alert("Thanks for visiting my website!");

});

startBtn.addEventListener("click", function () {

  document.getElementById("about").scrollIntoView({

    behavior: "smooth"

  });

});

contactform.addEventListener("submit", function (event) {

  event.preventDefault();

  alert("Thank you! Your message has been sent.");

  contactform.reset();

});