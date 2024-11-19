document.addEventListener("scroll", function () {
  const header = document.getElementById("scroll-header");
  const scrollPosition = window.pageYOffset;

  // Example movement behavior: moves header down proportionally to scroll
  header.style.top = Math.min(scrollPosition, 100) + "px"; // Maximum top offset is 100px
});
