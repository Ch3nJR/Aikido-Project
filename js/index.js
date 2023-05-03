const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const faq = button.nextElementSibling;
    faq.classList.toggle("show");
  });
});

//To create reveal animations
ScrollReveal({
  //reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal(".left-landing-box, .benefit-left", {
  delay: 700,
  origin: "left",
});

ScrollReveal().reveal(".right-landing-box, .benefit-right", {
  delay: 500,
  origin: "right",
});

// ScrollReveal().reveal(".sec-01 .image, .info", {
//   delay: 600,
//   origin: "bottom",
// });

ScrollReveal().reveal(".feature, .testimonial", {
  delay: 500,
  origin: "bottom",
  interval: 200,
});

ScrollReveal().reveal(".faq-title, .questions-container", {
  delay: 500,
  origin: "top",
});
