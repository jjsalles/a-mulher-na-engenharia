document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("graceHopper").addEventListener("click", function () {
        window.location.href = "grace.html";
    });

    document.getElementById("hedyLamarr").addEventListener("click", function () {
        window.location.href = "hedy.html";
    });

    document.getElementById("katherineJohnson").addEventListener("click", function () {
        window.location.href = "katherine.html";
    });

    console.log("JavaScript carregado e eventos adicionados!");
});
// script.js

function toggleMenu() {
    const menu = document.getElementById("top-menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function toggleCard(element) {
    element.classList.toggle("expanded");
}
