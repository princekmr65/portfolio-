// Dark Mode Toggle Functions
let currentMode = 'light';
function cycleMode() {
  if (currentMode === 'light') {
    document.body.classList.remove('red-mode');
    document.body.classList.add('dark-mode');
    currentMode = 'dark';
  } else if (currentMode === 'dark') {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('red-mode');
    currentMode = 'red';
  } else {
    document.body.classList.remove('red-mode');
    document.body.classList.remove('dark-mode');
    currentMode = 'light';
  }
}
const modeToggle = document.getElementById("mode-toggle");
if (modeToggle) {
  modeToggle.addEventListener("click", cycleMode);
}
const mobileDarkMode = document.getElementById("mobile-dark-mode");
if (mobileDarkMode) {
  mobileDarkMode.addEventListener("click", () => {
    cycleMode();
    if (currentMode === 'light') {
      mobileDarkMode.textContent = "🌙";
    } else if (currentMode === 'dark') {
      mobileDarkMode.textContent = "☀";
    } else {
      mobileDarkMode.textContent = "🔴";
    }
  });
}

// Reveal Sections on Scroll
function revealSections() {
  const reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}
window.addEventListener("scroll", revealSections);

// Dynamic Text Typing
const messages = [
  "CSE GRADUATE FROM CMR UNIVERSITY",
  "ASPIRING DATA ANALYST "
];
const colors = ["red", "green"];
let currentIndex = 0;
const dynamicText = document.getElementById("dynamic-text");
function typeMessage(message, color, callback) {
  dynamicText.style.color = color;
  dynamicText.textContent = "";
  const chars = message.split("");
  let i = 0;
  function typeChar() {
    if (i < chars.length) {
      dynamicText.textContent += chars[i];
      i++;
      setTimeout(typeChar, 100);
    } else if (callback) {
      callback();
    }
  }
  typeChar();
}
function cycleMessages() {
  typeMessage(messages[currentIndex], colors[currentIndex], () => {
    setTimeout(() => {
      currentIndex = (currentIndex + 1) % messages.length;
      cycleMessages();
    }, 2000);
  });
}
cycleMessages();

// Skills Carousel Functionality for Small Screens
let currentSlide = 0;
const skillCards = document.querySelectorAll(".skill-card");
const totalSlides = skillCards.length;
function updateCard() {
  skillCards.forEach((card, index) => {
    card.classList.toggle("active", index === currentSlide);
  });
}
document.getElementById("prevBtn").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateCard();
});
document.getElementById("nextBtn").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCard();
});
