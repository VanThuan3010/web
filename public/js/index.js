import $ from "jquery";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.min.js";
import "jquery/dist/jquery.min.js";
import "../css/style.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//-----------------------------------------

$(".slide").slick({
  dots: false,
  infinite: true,
  speed: 500,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow:
    "<button type='button' class='slick-prev pull-left'><i class='fa-solid fa-arrow-left' aria-hidden='true'></i></button>",
  nextArrow:
    "<button type='button' class='slick-next pull-right'><i class='fa-solid fa-arrow-right' aria-hidden='true'></i></button>",
});

// Modal

// var modal = document.getElementById("myModal");

// var btn = document.getElementById("myBtn");

// var span = document.getElementsByClassName("close")[0];

// btn.onclick = function () {
//   modal.style.display = "block";
// };

// span.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// ////////////////////////////////////

$(".slide2").slick({
  dots: false,
  infinite: true,
  speed: 500,
  cssEase: "linear",
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
});

$(".slide-blog").slick({
  dots:true,
  infinite: true,
  speed: 500,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  fade:true,
  autoplaySpeed: 2000,
  arrows: false,
});
