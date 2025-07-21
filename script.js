let slideIndex = Math.floor(Math.random() * document.getElementsByClassName("mySlides").length); // start at random slide
let timerId = null;

function showSlides() {
  let slides = document.getElementsByClassName("mySlides");
  if (slides.length === 0) return;

  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Show the current slide
  slides[slideIndex].style.display = "block";

  // Advance to next slide predictably
  slideIndex = (slideIndex + 1) % slides.length;

  // Reset the timer
  if (timerId) clearTimeout(timerId);
  timerId = setTimeout(showSlides, 10000);
}

// Advance on click anywhere on the document
document.addEventListener("click", showSlides);

// Start the slideshow
showSlides();
