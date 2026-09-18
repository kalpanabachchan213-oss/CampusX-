// ============================================================
// CAMPUSX - COMPLETE JAVASCRIPT
// Student Learning & Campus Portal
// ============================================================


// ============================================================
// 1. PAGE LOAD MESSAGE
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

    console.log("CampusX website loaded successfully! 🎓");

});


// ============================================================
// 2. SMOOTH NAVIGATION
// ============================================================

const navigationLinks = document.querySelectorAll('a[href^="#"]');

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        // Empty "#" link ko ignore karo
        if (targetId === "#") {
            return;
        }

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ============================================================
// 3. NAVBAR ACTIVE LINK
// ============================================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


// ============================================================
// 4. SCROLL REVEAL ANIMATION
// ============================================================

// Page ke cards aur sections ko scroll karte waqt
// slowly visible karne ke liye

const revealElements = document.querySelectorAll(
    ".stat-card, .feature-card, .event-card, .project-card, .about-card"
);


const revealObserver = new IntersectionObserver(

    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.15
    }

);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


// ============================================================
// 5. HERO BUTTON CLICK EFFECT
// ============================================================

const buttons = document.querySelectorAll(".btn");


buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        this.style.transform = "scale(0.95)";

        setTimeout(() => {

            this.style.transform = "";

        }, 150);

    });

});


// ============================================================
// 6. LOGIN FORM
// ============================================================

const loginForm = document.querySelector(".login-box form");


if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const email = document.getElementById("email").value.trim();

        const password =
            document.getElementById("password").value.trim();


        // Email check

        if (email === "") {

            alert("Please enter your email address 📧");

            return;

        }


        // Password check

        if (password === "") {

            alert("Please enter your password 🔐");

            return;

        }


        if (password.length < 6) {

            alert(
                "Password must contain at least 6 characters 🔐"
            );

            return;

        }


        // Temporary message
        // Real login PHP + MySQL se baad me hoga

        alert(
            "Login form submitted successfully! 🎓\n\n" +
            "Real login will be connected with PHP + MySQL."
        );

    });

}


// ============================================================
// 7. CONTACT FORM VALIDATION
// ============================================================

const contactForm =
    document.querySelector(".contact-form form");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value.trim();


        const email =
            document.getElementById("contact-email").value.trim();


        const message =
            document.getElementById("message").value.trim();


        // Name check

        if (name === "") {

            alert("Please enter your name 😊");

            return;

        }


        // Email check

        if (email === "") {

            alert("Please enter your email 📧");

            return;

        }


        // Message check

        if (message === "") {

            alert("Please write your message 💌");

            return;

        }


        // Message length check

        if (message.length < 10) {

            alert(
                "Please write a little more detail in your message."
            );

            return;

        }


        alert(
            "Thank you, " +
            name +
            "! 💖\n\n" +
            "Your message has been received."
        );


        // Form clear

        contactForm.reset();

    });

}


// ============================================================
// 8. PROJECT LINK MESSAGE
// ============================================================

const projectLinks =
    document.querySelectorAll(".project-card a");


projectLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const linkAddress = this.getAttribute("href");


        // Agar actual link nahi hai

        if (linkAddress === "#") {

            event.preventDefault();

            alert(
                "Project details will be added soon! 🚀"
            );

        }

    });

});


// ============================================================
// 9. NOTES LINK MESSAGE
// ============================================================

const noteLinks =
    document.querySelectorAll(".feature-card a");


noteLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const linkAddress = this.getAttribute("href");


        if (linkAddress === "#") {

            event.preventDefault();

            alert(
                "Learning resources will be available soon! 📚"
            );

        }

    });

});


// ============================================================
// 10. SCROLL TO TOP BUTTON
// ============================================================

// Button create karna

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.setAttribute(
    "aria-label",
    "Scroll to top"
);


// Button ko page mein add karna

document.body.appendChild(topButton);


// Button ki styling

topButton.style.position = "fixed";

topButton.style.bottom = "25px";

topButton.style.right = "25px";

topButton.style.width = "48px";

topButton.style.height = "48px";

topButton.style.border = "none";

topButton.style.borderRadius = "50%";

topButton.style.background =
    "linear-gradient(135deg, #7c3aed, #ec4899)";

topButton.style.color = "white";

topButton.style.fontSize = "24px";

topButton.style.fontWeight = "bold";

topButton.style.cursor = "pointer";

topButton.style.display = "none";

topButton.style.zIndex = "999";

topButton.style.boxShadow =
    "0 8px 20px rgba(124, 58, 237, 0.3)";


// Scroll hone par button show

window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});


// Button click

topButton.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ============================================================
// 11. WELCOME CONSOLE MESSAGE
// ============================================================

console.log(
    "🎓 Welcome to CampusX!"
);

console.log(
    "📚 Learn | 🚀 Create | 🌟 Explore | 🎯 Grow"
);
