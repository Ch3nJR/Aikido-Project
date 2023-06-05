//Top swiper
var swiper = new Swiper(".mySwiper", {
  loop: true,
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
      slidesPerGroup: 1,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 10,
    },

    1300: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 10,
    },

    1440: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 30,
    },
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
ScrollReveal().reveal(".location, .preschool-container ul", {
  delay: 500,
  origin: "bottom",
  interval: 200,
});

ScrollReveal().reveal(".location-header", {
  delay: 500,
  origin: "left",
});

//modal imgs
document.querySelectorAll(".modal img").forEach((image) => {
  image.onclick = () => {
    document.querySelector(".popup-img").style.display = "block";
    document.querySelector(".popup-img img").src = image.getAttribute("src");
  };
});

document.querySelector(".popup-img i").onclick = () => {
  document.querySelector(".popup-img").style.display = "none";
};
