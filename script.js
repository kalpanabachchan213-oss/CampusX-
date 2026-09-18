
/* =========================================================
   CAMPUSX - COMPLETE SCRIPT.JS
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       1. SCROLL REVEAL ANIMATION
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".info-card, .faculty-card, .event-card, .project-card, " +
        ".download-card, .notice-item, .timeline-item, " +
        ".dashboard-card, .contact-card, .stat-card, " +
        ".form-card, .environment-box > div"
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(function (element) {
        observer.observe(element);
    });


    /* =====================================================
       2. NAVBAR ACTIVE LINK
    ===================================================== */

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    /* =====================================================
       3. SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (
                targetId &&
                targetId !== "#" &&
                document.querySelector(targetId)
            ) {

                event.preventDefault();

                document.querySelector(targetId).scroll
