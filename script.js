$(document).ready(function () {
  $(window).scroll(function () {
    //  sticky navbar on scroll script  //
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    //  scroll-up button show/hide script  //
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //  slide-up script  //

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    //  removing smooth scroll on slide-up button click  //
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    //  Smooth scroll on Menu Items click  //

    $("html").css("scrollBehavior", "smooth");
  });

  //  Toggle Navbar  //

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //  Typing Text Animation  //


  var typed = new Typed(".typing-2", {
    strings: [
      "Game Developer",
      "Blueprint (Node Programmer)",
      "C++ Developer",
      "Game Designer",
      "3D Designer",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  //  Owl Carousel  //

  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayspeed: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// animated cursor //
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    "left:" + e.clientX + "px; top: " + e.clientY + "px";
});

const scriptURL =
  "https://script.google.com/macros/s/AKfycbzlT_altzERaVNX2ldzDCqBPiCXQeyZOQvbeLJXtNXWkHcHXs-bmg8JAxtNNfsdinAW/exec";
const form = document.forms['google-sheet'];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "post", body: new FormData(form) })
    .then((response) =>
      alert("Thanks for Contacting us..! We Will Contact You Soon...")
    )
    .catch((error) => console.error("Error!", error.message));
});


document.querySelectorAll('input[type="number"]').forEach(input => {
  input.oninput = () => {
    if (input.value.length > input.maxlength) input.value = input.value.slice(0, input.maxlength);
  }
});


// Get the form element
const forms = document.getElementById('contactform');

// Add an event listener for form submission
forms.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Reset the form after submission
    forms.reset();
});