

document.addEventListener("DOMContentLoaded", function () {

    console.log("CampusX loaded successfully!");


    /* ======
                    SCROLL REVEAL
    ===== */

    const cards = document.querySelectorAll(
        ".facility-card, .announcement-card, .note-card, .event-card, .project-card, .skill-card, .dashboard-card, .office-card, .placement-card, .calendar-card, .environment-card, .stat-card"
    );

    cards.forEach(function (card) {
        card.classList.add("reveal");
    });


    const revealObserver = new IntersectionObserver(
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


    cards.forEach(function (card) {

        revealObserver.observe(card);

    });


    /* =================================================
                    ACTIVE NAVBAR
    ================================================= */

    const navLinks = document.querySelectorAll(".navbar a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {

                item.classList.remove("active");

            });

            this.classList.add("active");

        });

    });


    /* =======
                    LOGIN FORM
    ====== */

    const loginForm = document.getElementById("loginForm");


    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const email =
                document.getElementById("loginEmail").value.trim();

            const password =
                document.getElementById("loginPassword").value.trim();


            if (email === "" || password === "") {

                alert("⚠️ Please enter email and password.");

                return;

            }


            if (password.length < 6) {

                alert(
                    "⚠️ Password should contain at least 6 characters."
                );

                return;

            }


            /*
                Abhi ye DEMO login hai.

                PHP + MySQL backend connect hone ke baad
                yahi login real database se verify hoga.
            */


            alert(
                "🎉 Demo Login Successful!\n\n" +
                "Welcome to CampusX Student Portal."
            );


            document
                .getElementById("dashboard")
                .scrollIntoView({
                    behavior: "smooth"
                });

        });

    }


    /*=====
                REGISTRATION FORM
    ===== */

    const registerForm =
        document.getElementById("registerForm");


    if (registerForm) {

        registerForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document
                        .getElementById("studentName")
                        .value
                        .trim();


                const email =
                    document
                        .getElementById("studentEmail")
                        .value
                        .trim();


                const password =
                    document
                        .getElementById("registerPassword")
                        .value
                        .trim();


                if (
                    name === "" ||
                    email === "" ||
                    password === ""
                ) {

                    alert(
                        "⚠️ Please fill all required fields."
                    );

                    return;

                }


                if (password.length < 6) {

                    alert(
                        "⚠️ Password must contain at least 6 characters."
                    );

                    return;

                }


                /*
                    Demo registration.

                    Real registration PHP + MySQL
                    connect hone ke baad hogi.
                */


                alert(
                    "🎉 Registration Successful!\n\n" +
                    "Welcome " + name + "!"
                );


                registerForm.reset();

            }
        );

    }


    /* ======
                    FEEDBACK FORM
    ============= */

    const feedbackForm =
        document.getElementById("feedbackForm");


    if (feedbackForm) {

        feedbackForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document
                        .getElementById("feedbackName")
                        .value
                        .trim();


                const email =
                    document
                        .getElementById("feedbackEmail")
                        .value
                        .trim();


                const message =
                    document
                        .getElementById("feedbackMessage")
                        .value
                        .trim();


                if (
                    name === "" ||
                    email === "" ||
                    message === ""
                ) {

                    alert(
                        "⚠️ Please complete the feedback form."
                    );

                    return;

                }


                alert(
                    "💖 Thank you " +
                    name
