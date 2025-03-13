



document.addEventListener("DOMContentLoaded", function () {
  const certItems = document.querySelectorAll(".cert-item");
  const certDisplay = document.getElementById("cert-display");
  let lastSelectedImage = certDisplay.src; // Store the last selected image

  certItems.forEach(item => {
    // Handle hover event
    item.addEventListener("mouseenter", function () {
      const newImage = this.getAttribute("data-image");
      certDisplay.style.opacity = "0";
      setTimeout(() => {
        certDisplay.src = newImage;
        certDisplay.style.opacity = "1";
      }, 300);
    });

    // Restore last selected image when mouse leaves
    item.addEventListener("mouseleave", function () {
      certDisplay.style.opacity = "0";
      setTimeout(() => {
        certDisplay.src = lastSelectedImage;
        certDisplay.style.opacity = "1";
      }, 300);
    });

    // Handle click event (optional: to make a selection persistent)
    item.addEventListener("click", function () {
      certItems.forEach(cert => cert.classList.remove("active"));
      this.classList.add("active");
      lastSelectedImage = this.getAttribute("data-image"); // Save selected image
    });
  });
});


const themeToggle = document.getElementById("theme-toggle");
const moonIcon = document.getElementById("moon-icon");
const sunIcon = document.getElementById("sun-icon");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Toggle Icons
  if (document.body.classList.contains("dark-mode")) {
    moonIcon.style.display = "none"; 
    sunIcon.style.display = "inline"; 
  } else {
    moonIcon.style.display = "inline"; 
    sunIcon.style.display = "none"; 
  }
});



const text = "From Chalkboards to Keyboards ⌨";
let index = 0;

function typeEffect() {
    document.getElementById("typewriter").innerText = text.slice(0, index);
    index++;

    if (index <= text.length) {
        setTimeout(typeEffect, 100); // Typing Speed
    } else {
        index = 0;
        setTimeout(typeEffect, 2000); // Pause before restarting
    }
}

typeEffect();





document.addEventListener("DOMContentLoaded", () => {
  const contactSection = document.querySelector(".contact-section");

  function checkVisibility() {
      const rect = contactSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.8) {
          contactSection.classList.add("visible");
          window.removeEventListener("scroll", checkVisibility); // Runs only once
      }
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); // Check immediately in case it's already in view
});


function scrollToContact() {
  document.getElementById("contact-section").scrollIntoView({ behavior: "smooth" });
}


function scrollToProject() {
  document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
}



document.getElementById("contact-button").addEventListener("click", function () {
  document.getElementById("contact-info").classList.add("hidden-info");
});
