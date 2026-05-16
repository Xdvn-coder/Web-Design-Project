const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("nav");
    hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
});

//script kotak saran 
function kirimPesan(event) {
    event.preventDefault();
    alert("Terima kasih, saran, Keluhan atau Komentar Anda telah kami terima!");
    window.location.href = "kontak.html";
}