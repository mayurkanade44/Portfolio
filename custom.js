/*============ Navbar Transperent To Solid ============*/

const nav = document.querySelector(".navbar");
window.addEventListener("scroll", solidNav);

function solidNav() {
  if (window.scrollY > 690) {
    nav.classList.add("solid");
  } else {
    nav.classList.remove("solid");
  }
}

/*============ TYPEWRIGHTER EFFECT ============*/

const autoText = document.getElementById("text");
const text = ["I am a Python Developer", "Liverpool Fan"];
let count = 0;
let idx = 1;
let speed = 250;
let currentText = "";

writeText();

function writeText() {
  if (count === text.length) {
    count = 0;
  }

  currentText = text[count];

  autoText.innerText = currentText.slice(0, idx);
  idx++;
  if (idx > currentText.length) {
    count++;
    idx = 1;
  }

  setTimeout(writeText, speed);
}

/*============ FOOTER YEAR ============*/

const year = document.getElementById("year");

writeYear();

function writeYear() {
  year.innerText = new Date().getFullYear();
}

/*============ BOOTSTRAP BREAK POINTS ============*/

const success = document.getElementById("success");
const text1 = ["Thank You For Your Message ❤"];

function sendMail(params) {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("service_vt1jbwc", "contact_form", this).then(
        function () {
          success.innerText = text1
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
}
