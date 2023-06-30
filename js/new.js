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
      slidesPerGroup: 2,
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
