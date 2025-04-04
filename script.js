/* Yeswanth code: JavaScript for event handling */

// Yeswanth code: "Register/Login" button
const registerBtn = document.querySelector(".register-btn");
registerBtn.addEventListener("click", () => {
  alert("Register/Login button clicked!");
  // Yeswanth code: In a real project, redirect to or display a login/register modal:
  // window.location.href = "/login.html";
});

// Yeswanth code: "Get Started" CTA button in the hero
const ctaBtn = document.querySelector(".cta-btn");
ctaBtn.addEventListener("click", () => {
  alert("Let’s get you started with YesRay!");
  // Yeswanth code: This can be replaced with your own logic (e.g., sign-up form).
});

// Yeswanth code: Handle the contact form submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent page refresh
    alert("Thanks for reaching out! We’ll respond as soon as possible.");
    contactForm.reset(); // optional: clear the form
  });
}
