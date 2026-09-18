document.addEventListener("DOMContentLoaded", function () {

    /* =========================
       MOBILE MENU
       ========================= */

    const menuBtn = document.getElementById("menuBtn");
    const navbar = document.querySelector(".navbar");

    if (menuBtn && navbar) {
        menuBtn.addEventListener("click", function () {
            navbar.classList.toggle("active");

            if (navbar.classList.contains("active")) {
                menuBtn.innerHTML = "✕";
            } else {
                menuBtn.innerHTML = "☰";
            }
        });

        // Mobile menu link click hone par menu close
        const navLinks = navbar.querySelectorAll("a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                navbar.classList.remove("active");
                menuBtn.innerHTML = "☰";
            });
        });
    }


    /* =========================
       SMOOTH SCROLL
       ========================= */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId && targetId !== "#") {

                const target = document.querySelector(targetId);

                if (target) {
                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });
                }
            }
        });

    });


    /* =========================
       ACTIVE NAVBAR
       ========================= */

    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".navbar a");

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

        links.forEach(function (link) {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    });


    /* =========================
       REVEAL ANIMATION
       ========================= */

    const revealElements = document.querySelectorAll(
        ".notice-card, .office-card, .facility-card, .academic-card, .note-card, .allocation-card, .event-card, .project-card, .career-card, .dashboard-card, .support-card, .contact-card"
    );

    const revealObserver = new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

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


    /* =========================
       REGISTRATION FORM
       ========================= */

    const registrationForm =
        document.getElementById("registrationForm");

    if (registrationForm) {

        registrationForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("fullName")?.value.trim();

            const enrollment =
                document.getElementById("enrollment")?.value.trim();

            const email =
                document.getElementById("registerEmail")?.value.trim();

            const mobile =
                document.getElementById("mobile")?.value.trim();

            const password =
                document.getElementById("registerPassword")?.value;

            const confirmPassword =
                document.getElementById("confirmPassword")?.value;

            const terms =
                document.getElementById("terms");


            /* Name */

            if (!name || name.length < 3) {

                alert("Please enter your full name.");

                return;
            }


            /* Enrollment */

            if (!enrollment || enrollment.length < 3) {

                alert("Please enter a valid enrollment number.");

                return;
            }


            /* Email */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert("Please enter a valid email address.");

                return;
            }


            /* Mobile */

            if (!/^[0-9]{10}$/.test(mobile)) {

                alert("Please enter a valid 10-digit mobile number.");

                return;
            }


            /* Password */

            if (!password || password.length < 6) {

                alert("Password must contain at least 6 characters.");

                return;
            }


            /* Confirm Password */

            if (password !== confirmPassword) {

                alert("Passwords do not match.");

                return;
            }


            /* Terms */

            if (terms && !terms.checked) {

                alert("Please accept the terms and conditions.");

                return;
            }


            /* Student data */

            const studentData = {

                name: name,

                enrollment: enrollment,

                email: email,

                mobile: mobile,

                course:
                    document.getElementById("course")?.value || "",

                branch:
                    document.getElementById("branch")?.value || "",

                year:
                    document.getElementById("year")?.value || "",

                semester:
                    document.getElementById("semester")?.value || "",

                gender:
                    document.getElementById("gender")?.value || "",

                dob:
                    document.getElementById("dob")?.value || "",

                city:
                    document.getElementById("city")?.value || ""

            };


            /* Save demo data */

            localStorage.setItem(
                "campusXStudent",
                JSON.stringify(studentData)
            );


            alert(
                "🎉 Registration Successful!\n\nWelcome to CampusX, " +
                name +
                "!"
            );


            registrationForm.reset();


            /* Dashboard par le jao */

            const dashboard =
                document.getElementById("dashboard");

            if (dashboard) {

                setTimeout(function () {

                    dashboard.scrollIntoView({
                        behavior: "smooth"
                    });

                }, 500);

            }

        });

    }


    /* =========================
       LOGIN FORM
       ========================= */

    const loginForm =
        document.getElementById("loginForm");

    if (loginForm) {

        loginForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const username =
                document.getElementById("loginUsername")?.value.trim();

            const password =
                document.getElementById("loginPassword")?.value;


            if (!username) {

                alert("Please enter your email or enrollment number.");

                return;
            }


            if (!password || password.length < 6) {

                alert("Password must contain at least 6 characters.");

                return;
            }


            const savedStudent =
                localStorage.getItem("campusXStudent");


            if (savedStudent) {

                const student =
                    JSON.parse(savedStudent);


                if (
                    username === student.email ||
                    username === student.enrollment
                ) {

                    alert(
                        "✅ Login Successful!\n\nWelcome back, " +
                        student.name +
                        "!"
                    );

                    showDashboard(student);

                } else {

                    alert(
                        "Demo login: Account details do not match the registered student.\n\n" +
                        "Use your registered email or enrollment number."
                    );

                }

            } else {

                alert(
                    "⚠️ No registered student found.\n\n" +
                    "Please register first."
                );

            }

        });

    }


    /* =========================
       SHOW DASHBOARD
       ========================= */

    function showDashboard(student) {

        const dashboard =
            document.getElementById("dashboard");

        if (!dashboard) {
            return;
        }


        dashboard.scrollIntoView({
            behavior: "smooth"
        });


        /* Student name update */

        const nameElements =
            dashboard.querySelectorAll(".student-name");

        nameElements.forEach(function (element) {

            element.textContent = student.name;

        });


        /* Optional dashboard welcome */

        const welcome =
            dashboard.querySelector(".dashboard-welcome");

        if (welcome) {

            welcome.textContent =
                "Welcome, " + student.name + " 👋";

        }

    }


    /* =========================
       QUERY FORM
       ========================= */

    const queryForm =
        document.getElementById("queryForm");

    if (queryForm) {

        queryForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("queryName")?.value.trim();

            const email =
                document.getElementById("queryEmail")?.value.trim();

            const category =
                document.getElementById("queryCategory")?.value;

            const message =
                document.getElementById("queryMessage")?.value.trim();


            if (!name || name.length < 3) {

                alert("Please enter your name.");

                return;
            }


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert("Please enter a valid email.");

                return;
            }


            if (!category) {

                alert("Please select a query category.");

                return;
            }


            if (!message || message.length < 10) {

                alert(
                    "Please describe your query in at least 10 characters."
                );

                return;
            }


            const queryData = {

                name: name,

                email: email,

                category: category,

                message: message,

                date: new Date().toLocaleString(),

                status: "Pending"

            };


            let queries =
                JSON.parse(
                    localStorage.getItem("campusXQueries")
                ) || [];


            queries.push(queryData);


            localStorage.setItem(
                "campusXQueries",
                JSON.stringify(queries)
            );


            alert(
                "📩 Query submitted successfully!\n\n" +
                "Our student support team will review it."
            );


            queryForm.reset();

        });

    }


    /* =========================
       FEEDBACK FORM
       ========================= */

    const feedbackForm =
        document.getElementById("feedbackForm");

    if (feedbackForm) {

        feedbackForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const name =
                document.getElementById("feedbackName")?.value.trim();

            const email =
                document.getElementById("feedbackEmail")?.value.trim();

            const message =
                document.getElementById("feedbackMessage")?.value.trim();


            if (!name || name.length < 3) {

                alert("Please enter your name.");

                return;
            }


            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email)) {

                alert("Please enter a valid email.");

                return;
            }


            if (!message || message.length < 5) {

                alert("Please enter your feedback.");

                return;
            }


            const feedbackData = {

                name: name,

                email: email,

                message: message,

                date: new Date().toLocaleString()

            };


            let feedbacks =
                JSON.parse(
                    localStorage.getItem("campusXFeedback")
                ) || [];


            feedbacks.push(feedbackData);


            localStorage.setItem(
                "campusXFeedback",
                JSON.stringify(feedbacks)
            );


            alert(
                "💖 Thank you for your valuable feedback!"
            );


            feedbackForm.reset();

        });

    }


    /* =========================
       ALLOCATION DEMO
       ========================= */

    window.showDemo = function (type) {

        const messages = {

            "Classroom":
                "🏫 Classroom Allocation\n\nDemo: Your classroom allocation will appear here after backend integration.",

            "Lab":
                "💻 Lab Allocation\n\nDemo: Your computer/science lab details will appear here.",

            "Exam Room":
                "📝 Exam Room Allocation\n\nDemo: Your examination room and seat number will appear here.",

            "Mentor":
                "👨‍🏫 Mentor Allocation\n\nDemo: Your assigned faculty mentor will appear here.",

            "Project":
                "🚀 Project Allocation\n\nDemo: Your project guide and project details will appear here.",

            "Timetable":
                "📅 Timetable\n\nDemo: Your class timetable will appear here."

        };


        alert(
            messages[type] ||
            "CampusX allocation feature will be connected with PHP + MySQL."
        );

    };


    /* =========================
       BUTTON EFFECT
       ========================= */

    const buttons =
        document.querySelectorAll("button, .btn");

    buttons.forEach(function (button) {

        button.addEventListener("click", function () {

            this.style.transform = "scale(0.97)";

            setTimeout(() => {

                this.style.transform = "";

            }, 120);

        });

    });


    /* =========================
       BACK TO TOP
       ========================= */

    const backToTop =
        document.getElementById("backToTop");


    if (backToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 500) {

                backToTop.classList.add("show");

            } else {

                backToTop.classList.remove("show");

            }

        });


        backToTop.addEventListener("click", function () {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }


    /* =========================
       CURRENT YEAR
       ========================= */

    const yearElement =
        document.getElementById("year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* =========================
       PASSWORD SHOW / HIDE
       ========================= */

    const passwordInputs =
        document.querySelectorAll(
            'input[type="password"]'
        );

    passwordInputs.forEach(function (input) {

        input.addEventListener("focus", function () {

            this.style.borderColor = "#6c3cff";

        });

        input.addEventListener("blur", function () {

            this.style.borderColor = "";

        });

    });


    /* =========================
       CONSOLE MESSAGE
       ========================= */

    console.log(
        "🎓 CampusX Student Portal loaded successfully!"
    );

    console.log(
        "🚀 Frontend Demo | PHP + MySQL backend can be connected later."
    );

});
