document.addEventListener("DOMContentLoaded", function() {
    var navIcon = document.getElementById("nav-icon");
    var navMenu = document.getElementById("nav-menu");
  
    navIcon.addEventListener("click", function() {
      navIcon.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  });
  