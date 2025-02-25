function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    menu.classList.toggle("active");
}

function toggleDarkMode() {
    const body = document.body;
    const icon = document.querySelector(".dark-mode-toggle i");

    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
        icon.classList.replace("bx-moon", "bx-sun");
    } else {
        localStorage.setItem("darkMode", "disabled");
        icon.classList.replace("bx-sun", "bx-moon");
    }
}

window.onload = function () {
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        document.querySelector(".dark-mode-toggle i").classList.replace("bx-moon", "bx-sun");
    }
};
