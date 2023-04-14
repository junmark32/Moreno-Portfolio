// Get the navigation bar
var nav = document.querySelector('nav');

// Get the offset position of the navigation bar
var navOffset = nav.offsetTop;

// Add a scroll event listener to the window
window.addEventListener('scroll', function() {
  // Check if the user has scrolled past the navigation bar
  if (window.pageYOffset >= navOffset) {
    // Add the "sticky" class to the navigation bar
    nav.classList.add('sticky');
  } else {
    // Remove the "sticky" class from the navigation bar
    nav.classList.remove('sticky');
  }
});

// 

const textArray = ["GRAPHIC DESIGNER", "UI/UX DESIGNER", "MISS YOU LODS."];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;
const heading = document.querySelector(".g-d");

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    heading.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    heading.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if (textArray.length) {
    setTimeout(type, newTextDelay + 250);
  }
});

/////



