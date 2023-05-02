//whatsapp button
const whatsappBtn = document.querySelector(".wa-btn");

window.addEventListener("scroll", function () {
  whatsappBtn.classList.toggle("active", window.scrollY > 100);
});
