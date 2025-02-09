document.addEventListener("DOMContentLoaded", function() {
    let links = document.querySelectorAll("nav a");
    let sections = document.querySelectorAll(".content");
    let letsTalkBtn = document.getElementById("lets-talk");

    function setActiveSection(target) {
        sections.forEach(section => section.classList.remove("active"));
        let targetSection = document.getElementById(target);
        if (targetSection) {
            targetSection.classList.add("active");
        }

        links.forEach(link => link.classList.remove("active"));
        let targetNavLink = document.querySelector(`nav a[data-target='${target}']`);
        if (targetNavLink) {
            targetNavLink.classList.add("active");
        }
    }

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            let target = this.getAttribute("data-target");
            setActiveSection(target);
        });
    });

    if (letsTalkBtn) {
        letsTalkBtn.addEventListener("click", function(event) {
            event.preventDefault();
            setActiveSection("contact");
        });
    }

    setActiveSection("home"); 

    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            let targetId = this.getAttribute("href").substring(1);
            let targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");
    const inputs = document.querySelectorAll(".contact-form .item");
    const sendButton = document.querySelector(".send");

    function validateForm() {
        let isValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isValid = false;
            }
        });

        sendButton.disabled = !isValid;
    }

    inputs.forEach(input => {
        input.addEventListener("input", validateForm);
    });

    form.addEventListener("submit", function (event) {
        validateForm();
        if (sendButton.disabled) {
            event.preventDefault();
        } else {
            setTimeout(() => {
                form.reset();
                sendButton.disabled = true;
            }, 500);
        }
    });

    sendButton.disabled = true;
});

