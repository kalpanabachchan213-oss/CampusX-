/* =========================================
   🌈 CAMPUSX - JAVASCRIPT
   ========================================= */

document.addEventListener("DOMContentLoaded", function () {

    console.log("🎓 CampusX loaded successfully!");

    /* =====================================
       ✨ SCROLL REVEAL ANIMATION
       ===================================== */

    const elements = document.querySelectorAll(
        ".card, .quick-card, .journey-box, .project-box, .event-box, .campus-content"
    );

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );


    elements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });


    /* =====================================
       💖 SMOOTH SCROLL
       ===================================== */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });


    /* =====================================
       🎀 BUTTON CLICK EFFECT
       ===================================== */

    document.querySelectorAll(".btn, .color-btn, .login-btn").forEach(
        function (button) {

            button.addEventListener("click", function () {

                button.style.transform = "scale(0.96)";

                setTimeout(function () {

                    button.style.transform = "";

                }, 150);

            });

        }
    );


    /* =====================================
       🌟 HEADER SHADOW ON SCROLL
       ===================================== */

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {

            header.style.boxShadow =
                "0 8px 30px rgba(124, 77, 255, 0.20)";

        } else {

            header.style.boxShadow =
                "0 5px 25px rgba(150, 80, 180, 0.15)";

        }

    });


    /* =====================================
       💕 WELCOME TEXT EFFECT
       ===================================== */

    const welcome = document.querySelector(".welcome");

    if (welcome) {

        setInterval(function () {

            welcome.style.transform = "translateY(-3px)";

            setTimeout(function () {

                welcome.style.transform = "translateY(0)";

            }, 500);

        }, 2500);

    }


    /* =====================================
       🎉 CONSOLE MESSAGE
       ===================================== */

    console.log(
        "🌈 Welcome to CampusX — Your Campus. Your Learning. Your Future."
    );

});
