const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("nav");
    hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});