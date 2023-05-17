//To create reveal animations
ScrollReveal({
  //reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal(".heading-container", {
  delay: 500,
  origin: "left",
});

ScrollReveal().reveal(".job, .cta-container", {
  delay: 500,
  origin: "bottom",
  interval: 200,
});
