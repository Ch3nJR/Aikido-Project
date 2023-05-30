//To create reveal animations
ScrollReveal({
  //reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal(".location, .preschool-container ul", {
  delay: 500,
  origin: "bottom",
  interval: 200,
});

ScrollReveal().reveal(".location-header", {
  delay: 500,
  origin: "left",
});
