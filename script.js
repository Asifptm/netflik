



/* --------------------- menu -------------------- */

document.addEventListener('DOMContentLoaded', function() {
  var hamburgerMenu = document.querySelector('.new-hamburger-icon');
  var sidebar = document.querySelector('.sidebar');
  var closeSidebarButton = document.querySelector('.close-sidebar');
  var menuLinks = document.querySelectorAll('.menu li');

  hamburgerMenu.addEventListener('click', function() {
    this.classList.toggle('open');
    sidebar.classList.toggle('active');
  });

  closeSidebarButton.addEventListener('click', function() {
    hamburgerMenu.classList.remove('open');
    sidebar.classList.remove('active');
  });

  document.addEventListener('click', function(event) {
    var target = event.target;
    if (!target.closest('.navbar') && !target.closest('.sidebar')) {
      hamburgerMenu.classList.remove('open');
      sidebar.classList.remove('active');
    }
  });

  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      hamburgerMenu.classList.remove('open');
      sidebar.classList.remove('active');
    });
  });
});

   /* --------------- search ---------------    */

document.addEventListener("DOMContentLoaded", function() {
  var searchIcon = document.querySelector(".search-icon");
  var closeIcon = document.querySelector(".close-icon");
  var searchBar = document.querySelector(".search-bar");

  searchIcon.addEventListener("click", function() {
    searchBar.classList.add("active");
  });

  closeIcon.addEventListener("click", function() {
    searchBar.classList.remove("active");
  });
});

/**
 * ----------------- footer------------
 */

// Get the current year
const currentYear = new Date().getFullYear();

// Set the current year in the footer
const yearElement = document.getElementById('year');
yearElement.textContent = currentYear;


window.addEventListener('load', function() {
  const container = document.querySelector('.container');
  container.addEventListener('scroll', function() {
    container.classList.toggle('snapping', container.scrollLeft % 220 !== 0);
  });
});




       /*--------------form----------------*/

document.getElementById("subscribe-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission
  var email = document.getElementById("email-input").value;
  if (validateEmail(email)) {
    // Show the modal
    modal.style.display = "block";
    document.getElementById("email-input").value = "";
  } else {
    alert("Please enter a valid email address.");
  }
});

// Get the modal element
var modal = document.getElementById("success-modal");

// Get the close button for the modal
var closeBtn = document.getElementsByClassName("close")[0];

// Close the modal when the close button is clicked
closeBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close the modal when the user clicks outside the modal
window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

function validateEmail(email) {
  // Simple email validation regex
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**------------------------- ------------------------ */


const navLinks = document.querySelectorAll('.nav-link');

function setActiveLink() {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  
  this.classList.add('active');
}

navLinks.forEach(link => {
  link.addEventListener('click', setActiveLink);
});




document.addEventListener('DOMContentLoaded', function() {
  var dropdownToggle = document.querySelector('.dropdown2-toggle');
  var dropdownMenu = document.querySelector('.dropdown2-menu');

  dropdownToggle.addEventListener('click', function(event) {
    event.preventDefault();
    dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
  });
});



// Existing JavaScript code

// Watch Later button click event
const watchLaterButtons = document.querySelectorAll('.watch-later-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.close-button');

watchLaterButtons.forEach(button => {
  button.addEventListener('click', () => {
    popup.style.display = 'flex';
  });
});

// Close button click event
closeButton.addEventListener('click', () => {
  popup.style.display = 'none';
});

// Variables
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentSlide = 0;

// Functions
function nextSlide() {
  currentSlide++;
  if (currentSlide === slides.length) {
    currentSlide = 0;
  }
  updateSlider();
}

function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Automatic slide change
setInterval(nextSlide, 3000);
