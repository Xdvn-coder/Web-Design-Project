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

//script pop up detail produkk
const modal = document.getElementById("openproduk");

    function openProduk(image, title, price, kontak, logo){
        openproduk.classList.add("active");
        openproduk.classList.remove("hide");
        openproduk.style.display = "flex";
        document.getElementById("produk-img").src = image;
        document.getElementById("produk-name").innerText = title;
        document.getElementById("produk-price").innerText = price;
        document.getElementById("produk-kontak").innerHTML = kontak;
    }

    function closeProduk(){
        openproduk.classList.add("hide");
        setTimeout(() => {
            modal.classList.remove("active");
        }, 300);
    }

    window.onclick = function(e){
        if(e.target == openproduk){
            closeProduk();
        }
    }

//script slider
const slides = document.getElementById("slides");
let index = 0;
const totalSlides = 2;

    function showSlide(){
        slides.style.transform = `translateX(-${index * 400}px)`;
    }
    function nextSlide(){
        index++;
        if(index > totalSlides){
            index = 0;
        }
        showSlide();
    }
    function prevSlide(){
        index--;
        if(index < 0){
            index = totalSlides - 1;
        }
        showSlide();
    }

    // otomatis geser tiap 3 detik
    setInterval(nextSlide, 3000);