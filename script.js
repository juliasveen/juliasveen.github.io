// Header scroll behavior
document.addEventListener("scroll", function () {
    const header = document.getElementById("scroll-header");
    const scrollPosition = window.pageYOffset;

    // Moves header down proportionally to the scroll but limits the offset to 100px
    header.style.top = Math.min(scrollPosition, 100) + "px";
});

document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = new bootstrap.Carousel(document.getElementById('myCarousel'), {
      interval: 5000,
      wrap: true
    });
  });
  
