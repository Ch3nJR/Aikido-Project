//To create reveal animations
ScrollReveal({
  //reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal(".gr-item-text", {
  delay: 500,
  origin: "left",
});

ScrollReveal().reveal(".attribute", {
  delay: 500,
  origin: "right",
});

ScrollReveal().reveal(".bl-heading", {
  delay: 500,
  origin: "top",
});
