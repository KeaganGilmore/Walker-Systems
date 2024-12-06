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


    document.addEventListener('DOMContentLoaded', function () {
        const burgerIcon = document.querySelector('.burger-icon');
        const burgerNavbar = document.getElementById('burger-navbar');
        
        burgerIcon.addEventListener('click', function () {
            burgerNavbar.classList.toggle('active');
        });
    });
