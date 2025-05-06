// Click
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

// Hover
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.backgroundColor = "gold";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.backgroundColor = "lightblue";
});

// Keypress
document.getElementById("keyInput").addEventListener("keydown", (e) => {
  console.log(`You pressed: ${e.key}`);
});

// Double-click (Secret action)
document.getElementById("secretBox").addEventListener("dblclick", () => {
  alert("🎉 Secret unlocked!");
});

// Change color
document.getElementById("colorBtn").addEventListener("click", (e) => {
  e.target.style.backgroundColor = "tomato";
  e.target.style.color = "#fff";
});

// Gallery
const images = [
  "https://via.placeholder.com/200?text=1",
  "https://via.placeholder.com/200?text=2",
  "https://via.placeholder.com/200?text=3"
];
let currentImage = 0;
const galleryImg = document.getElementById("galleryImage");

document.getElementById("prevBtn").addEventListener("click", () => {
  currentImage = (currentImage - 1 + images.length) % images.length;
  galleryImg.src = images[currentImage];
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentImage = (currentImage + 1) % images.length;
  galleryImg.src = images[currentImage];
});

// Tabs
const tabButtons = document.querySelectorAll(".tabBtn");
const tabContent = document.getElementById("tabContent");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabContent.textContent = `Tab ${btn.dataset.tab} Content`;
  });
});

// Form validation
const form = document.getElementById("signupForm");
const feedback = document.getElementById("feedback");

document.getElementById("password").addEventListener("input", function () {
  if (this.value.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
  } else {
    feedback.textContent = "";
  }
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!email.includes("@")) {
    feedback.textContent = "Enter a valid email address.";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    return;
  }

  alert("Form submitted successfully!");
  form.reset();
  feedback.textContent = "";
});

// Dark mode toggle
const toggleThemeBtn = document.createElement("button");
toggleThemeBtn.textContent = "Toggle Dark Mode";
document.body.prepend(toggleThemeBtn);
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Load saved form data
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

[nameField, emailField, passwordField].forEach(field => {
  const saved = localStorage.getItem(field.id);
  if (saved) field.value = saved;
  field.addEventListener("input", () => localStorage.setItem(field.id, field.value));
});

// Auto slideshow
let autoSlide = setInterval(() => {
  currentImage = (currentImage + 1) % images.length;
  galleryImg.src = images[currentImage];
}, 5000); // 5 seconds

// Animate tab transitions
tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabContent.style.opacity = 0;
    setTimeout(() => {
      tabContent.textContent = `Tab ${btn.dataset.tab} Content`;
      tabContent.style.opacity = 1;
    }, 300);
  });
});

// Accordion
const accordionHeader = document.createElement("button");
accordionHeader.textContent = "Toggle Accordion Content";
accordionHeader.className = "accordion-toggle";
const accordionContent = document.createElement("div");
accordionContent.textContent = "Accordion hidden content!";
accordionContent.className = "accordion-content";
document.body.appendChild(accordionHeader);
document.body.appendChild(accordionContent);

accordionHeader.addEventListener("click", () => {
  accordionContent.classList.toggle("active");
});

// Tooltips
document.querySelectorAll("button").forEach(btn => {
  btn.title = "Click to interact";
});

// Original features remain unchanged
