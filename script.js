/* Yeswanth code: JavaScript for event handling */

// Yeswanth code: "Register/Login" button
const registerBtn = document.querySelector(".register-btn");
registerBtn.addEventListener("click", () => {
  alert("Register/Login button clicked!");
  // Yeswanth code: You can redirect to a login page or open a modal:
  // window.location.href = "/login.html";
});

// Yeswanth code: "Get Started" CTA button
const ctaBtn = document.querySelector(".cta-btn");
ctaBtn.addEventListener("click", () => {
  alert("CTA button clicked - let's get you started on YesRay!");
  // Yeswanth code: Possibly direct to a signup page:
  // window.location.href = "/signup.html";
});

// Yeswanth code: Simple event for the contact form
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // stop form from submitting
    alert("Thank you for reaching out! We'll be in touch soon.");
    // Yeswanth code: send form data to a server or handle it as needed
    contactForm.reset(); // optional: clear the form
  });
}
