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
ScrollReveal().reveal(".benefit-left, .left", {
  delay: 500,
  origin: "left",
});

ScrollReveal().reveal(".right-landing-box, .benefit-right", {
  delay: 500,
  origin: "right",
});

ScrollReveal().reveal(".feature-container, .testimonial", {
  delay: 500,
  origin: "bottom",
  interval: 200,
});

ScrollReveal().reveal(".faq-title, .questions-container", {
  delay: 500,
  origin: "top",
});

//Top swiper
var swiper = new Swiper(".mySwiper", {
  loop: true,
  slidesPerGroup: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
    },

    1300: {
      slidesPerView: 3,
    },

    1440: {
      slidesPerView: 3,
    },
  },
});

/*FAQ*/
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const faq = button.nextElementSibling;
    faq.classList.toggle("show");
  });
});
