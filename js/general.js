//Get NavBar
$.get("nav.html", function (data) {
  $("#navBar").replaceWith(data);
});

//Scroll to top button
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Get footer
$.get("footer.html", function (data) {
  $("#footer").replaceWith(data);
});
