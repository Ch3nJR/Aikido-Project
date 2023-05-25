//To create reveal animations
ScrollReveal({
  //reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal(".left-landing-box, .testimonial-header, .promo-header", {
  delay: 200,
  origin: "top",
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal(".benefit-left", {
  delay: 500,
  origin: "left",
});

ScrollReveal().reveal(".right-landing-box, .benefit-right", {
  delay: 500,
  origin: "right",
});

ScrollReveal().reveal(".feature, .testimonial, .promo-card", {
  delay: 500,
  origin: "bottom",
  interval: 200,
});

ScrollReveal().reveal(".faq-title, .questions-container", {
  delay: 500,
  origin: "top",
});

/*Promotion */
//all flip btns
const flipBtns = document.getElementsByClassName("flip-btn");
const front = document.getElementsByClassName("front");

//for each flip btn
Array.from(flipBtns).forEach((flipBtn) => {
  //add a click event handler
  flipBtn.addEventListener("click", () => {
    //find front that is linked to
    //find through parent element
    //find previous sibling element
    //from sibling element go down to child with .front class name
    //flips card
    flipBtn.parentNode.previousElementSibling.classList.toggle("flip-card");
  });
});

/*FAQ*/
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const faq = button.nextElementSibling;
    faq.classList.toggle("show");
  });
});
