var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

//To create reveal animations
ScrollReveal({
  //reset: true,
  distance: "60px",
  duration: 2500,
  delay: 400,
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal(".about-starting", {
  delay: 500,
  origin: "left",
});

ScrollReveal().reveal(".vv-container-text", {
  delay: 500,
  origin: "right",
});

ScrollReveal().reveal(".values", {
  delay: 600,
  origin: "bottom",
  interval: 200,
});

ScrollReveal().reveal(".teacher-section", {
  delay: 600,
  origin: "bottom",
});
