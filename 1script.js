// Welcome Message
window.onload = function () {
    alert("Welcome to Lavkesh Kushwaha's Portfolio Website");
};

// Smooth Scroll
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Form Validation
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    const name = document.querySelector("input[type='text']").value.trim();
    const email = document.querySelector("input[type='email']").value.trim();
    const password = document.querySelector("input[type='password']").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("Please fill all required fields.");
        return;
    }

    alert("Registration Successful!");

    form.reset();

});

// Image Click
const image = document.querySelector("img");

image.addEventListener("click", function () {

    alert("Hello! I am Lavkesh Kushwaha.");

});

// Video Auto Unmute
const video = document.querySelector("video");

video.addEventListener("play", function () {

    this.muted = false;
    this.volume = 1;

});

// Audio Play Message
const audio = document.querySelector("audio");

audio.addEventListener("play", function () {

    console.log("Audio Started");

});

// Progress Bar Animation
const progress = document.querySelector("progress");

let value = 0;

const interval = setInterval(() => {

    if (value <= 75) {

        progress.value = value;
        value++;

    } else {

        clearInterval(interval);

    }

}, 30);

// Current Year in Footer
document.querySelector("footer p").innerHTML =
`© ${new Date().getFullYear()} Student Portfolio Project`;