// Header scroll behavior
document.addEventListener("scroll", function () {
    const header = document.getElementById("scroll-header");
    const scrollPosition = window.pageYOffset;

    // Moves header down proportionally to the scroll but limits the offset to 100px
    header.style.top = Math.min(scrollPosition, 100) + "px";
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector(".header-section ul");

    menuIcon.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });
});

// image carousel
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];
let currentIndex = 0;

const imgElement = document.getElementById("carousel-image");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    imgElement.src = images[currentIndex];
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    imgElement.src = images[currentIndex];
});

// Auto-slide every 3 seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
}, 3000);

// JavaScript for portfolio section interactions
document.addEventListener("DOMContentLoaded", function () {
    const portfolioItems = document.querySelectorAll(".portfolio-item");
    
    portfolioItems.forEach(item => {
        item.addEventListener("mouseenter", () => {
            item.classList.add("hovered");
        });

        item.addEventListener("mouseleave", () => {
            item.classList.remove("hovered");
        });
    });
});



