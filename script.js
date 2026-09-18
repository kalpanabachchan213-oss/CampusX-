
/* =========================================
   CAMPUSX - SMART STUDENT CAMPUS PORTAL
   Complete JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       1. MOBILE MENU
    ========================================= */

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.querySelector(".navbar");

    if (menuBtn && navbar) {
        menuBtn.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });
    }

    document.querySelectorAll(".navbar a").forEach(function (link) {
        link.addEventListener("click", function () {
            if (navbar) {
                navbar.classList.remove("active");
            }
        });
    });


    /* =========================================
       2. SMOOTH SCROLL
    ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (e) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {
                e.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* =========================================
       3. ACTIVE NAVBAR LINK
    ========================================= */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".navbar a");

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

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    });


    /* =========================================
       4. SCROLL REVEAL ANIMATION
    ========================================= */

    const revealElements = document.querySelectorAll(
        ".card, .facility-card, .faculty-card, .event-card, .project-card, .download-card, .timeline-item"
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
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });


    /* =========================================
       5. REGISTRATION FORM
    ========================================= */

    const registrationForm = document.getElementById("registrationForm");

    if (registrationForm) {

        registrationForm.addEventListener("submit", function (e) {

            e.preventDefault();
