import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import $ from "jquery";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "animate.css/animate.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick.min.js";
import "../css/style.css";
import "hover.css/css/hover.css";
import AOS from "aos";
import "aos/dist/aos.css";
import _ from "lodash";
import { products } from "./product";
import "toastr/build/toastr.min.css";
import toastr from "toastr";

//-----------------------------------------

// -----------------------------------------------
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
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".project-timeline-slide").slick({
  dots: false,
  infinite: true,
  speed: 500,
  cssEase: "linear",
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".said-slide").slick({
  dots: false,
  infinite: true,
  speed: 500,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1500,
  arrows: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

$(".count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 1000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});

// $(window).on("click", (e) => {
//   if ($(e.target).is(".wrapper")){
//     $(".search-box input").css("display", "none");
//     $(".search-box button").css("display", "none");
//     $(".search-icon i").css("display", "block");
//   }
// })

$(() => {
  $(".links li a.this-page").on("click.disable", function (e) {
    e.preventDefault();
  });
});

AOS.init({
  once: true,
});

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};
