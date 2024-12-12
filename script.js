document.addEventListener("scroll", function () {
  const header = document.getElementById("scroll-header");
  const scrollPosition = window.pageYOffset;

  // Example movement behavior: moves header down proportionally to scroll
  header.style.top = Math.min(scrollPosition, 100) + "px"; // Maximum top offset is 100px
});

// Get the button and content elements
const toggleButton = document.getElementById('toggleButton');
const collapsibleContent = document.getElementById('collapsibleContent');

// Add event listener to toggle the content visibility
toggleButton.addEventListener('click', function() {
    // Toggle the display of the content
    if (collapsibleContent.style.display === "none" || collapsibleContent.style.display === "") {
        collapsibleContent.style.display = "block";
        toggleButton.innerHTML = '&#x25B2; Click to Collapse';  // Change the icon to an up arrow
    } else {
        collapsibleContent.style.display = "none";
        toggleButton.innerHTML = '&#x25BC; Click to Expand';  // Change the icon back to a down arrow
    }
});
