/* ================================
   CAMPUSX - JAVASCRIPT
================================ */

// Welcome message
window.addEventListener("load", function () {
    console.log("✨ Welcome to CampusX!");
});


// Smooth scrolling
document.querySelectorAll("a[href^='#']").forEach(function (link) {
    link.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Button click effect
document.querySelectorAll("button, .btn").forEach(function (button) {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.95)";

        setTimeout(() => {
            this.style.transform = "";
        }, 150);

    });

});


// Contact form
const contactForm = document.querySelector("form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("💖 Thank you for contacting CampusX! ✨");

        contactForm.reset();

    });

}


// Cute welcome popup
setTimeout(function () {

    console.log(
        "🎓 Welcome to CampusX — Learn, Create & Grow! 💜"
    );

}, 1000);


// Scroll-to-top button
const topButton = document.createElement("button");

topButton.innerHTML = "⬆️";

topButton.title = "Go to top";

topButton.style.position = "fixed";
topButton.style.bottom = "25px";
topButton.style.right = "25px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.borderRadius = "50%";
topButton.style.border = "none";
topButton.style.background =
    "linear-gradient(135deg, #ff1493, #7b2cbf)";
topButton.style.color = "white";
topButton.style.fontSize = "20px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "9999";

document.body.appendChild(topButton);


window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }

});


topButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
