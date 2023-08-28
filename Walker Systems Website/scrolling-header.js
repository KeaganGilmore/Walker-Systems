let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  const currentScrollPos = window.pageYOffset;
  
  if (prevScrollPos > currentScrollPos) {
    // Scrolling up
    document.querySelector("#header").style.top = "0"; // Show header
  } else {
    // Scrolling down
    document.querySelector("#header").style.top = "-225px"; // Hide header
  }
  
  prevScrollPos = currentScrollPos;
};

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobile-nav");

  hamburger.addEventListener("click", function () {
    mobileNav.classList.toggle("active");
  });
});