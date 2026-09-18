// CampusX JavaScript

document.addEventListener("DOMContentLoaded", function () {

    console.log("CampusX website loaded successfully!");

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });
            }

        });

    });

});
