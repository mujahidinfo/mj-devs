// Contact Form Validation
const contactForm = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const subjectError = document.getElementById("subject-error");
const messageError = document.getElementById("message-error");

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Form submission event
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  // Reset errors
  resetErrors();

  // Validate inputs
  let isValid = true;

  // Name validation
  if (nameInput.value.trim() === "") {
    showError(nameInput, nameError);
    isValid = false;
  }

  // Email validation
  if (!emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, emailError);
    isValid = false;
  }

  // Subject validation
  if (subjectInput.value.trim() === "") {
    showError(subjectInput, subjectError);
    isValid = false;
  }

  // Message validation
  if (messageInput.value.trim() === "") {
    showError(messageInput, messageError);
    isValid = false;
  }

  // If form is valid, submit (in a real application)
  if (isValid) {
    alert("Your message has been sent successfully!");
    contactForm.reset();
  }
});

// Show error function
function showError(input, errorElement) {
  input.style.borderColor = "#e74c3c";
  errorElement.classList.add("show-error");
}

// Reset errors function
function resetErrors() {
  const inputs = [nameInput, emailInput, subjectInput, messageInput];
  const errorElements = [nameError, emailError, subjectError, messageError];

  inputs.forEach((input) => {
    input.style.borderColor = "#ddd";
  });

  errorElements.forEach((error) => {
    error.classList.remove("show-error");
  });
}

// Input event listeners for real-time validation
nameInput.addEventListener("input", function () {
  if (nameInput.value.trim() !== "") {
    nameInput.style.borderColor = "#ddd";
    nameError.classList.remove("show-error");
  }
});

emailInput.addEventListener("input", function () {
  if (emailRegex.test(emailInput.value.trim())) {
    emailInput.style.borderColor = "#ddd";
    emailError.classList.remove("show-error");
  }
});

subjectInput.addEventListener("input", function () {
  if (subjectInput.value.trim() !== "") {
    subjectInput.style.borderColor = "#ddd";
    subjectError.classList.remove("show-error");
  }
});

messageInput.addEventListener("input", function () {
  if (messageInput.value.trim() !== "") {
    messageInput.style.borderColor = "#ddd";
    messageError.classList.remove("show-error");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});
