//To create reveal animations
ScrollReveal({
  //reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal(".left", {
  delay: 500,
  origin: "left",
});

ScrollReveal().reveal(".right", {
  delay: 500,
  origin: "right",
});

ScrollReveal().reveal(".desc-text-group", {
  delay: 500,
  origin: "top",
  interval: 200,
});
