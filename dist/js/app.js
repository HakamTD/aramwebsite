/*!
 * Nuotron-Aram v0.0.1
 * Aram Website.
 * (c) 2019 Nuotron-J
 *  License
 * 
 */

function hideLoading() {
  $(".loading>span").css({
    opacity: 0
  });
  $(".loading").css({
    transformOrigin: "right",
    width: 0,
    opacity: 0,
    transition: "all 1s"
  });
  setTimeout((function() {
    $(".loading").hide(1000);
  }), 1000);
  $("html, body").css({
    overflow: "initial"
  });
}

if ($(".swiper-container").length)
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      prevEl: ".swiper-button-next",
      nextEl: ".swiper-button-prev"
    }
  });
// for load page
(function() {
  window.addEventListener("load", (function() {
    setTimeout((function() {
      hideLoading();
    }), 5000);
  }));

  new WOW().init();
  $(".sidenav").sidenav();
  $(".carousel").carousel();
  $(".slider").slider();
  $(".carousel.carousel-slider").carousel({
    fullWidth: true,
    indicators: true
  });
})();

$(window).scroll((function() {
  if ($(document).scrollTop() > 500) {
    $("nav").css({
      top: 0
    });
    $("nav").removeClass("z-depth-0");
    $("nav").addClass("z-depth-3");
    $("nav").addClass("ol-dark");
    $("header nav .brand-logo img").css({
      width: "33px",
      marginTop: "9px"
    });
  } else {
    $("nav").css({
      top: "8%"
    });
    $("nav").addClass("z-depth-0");
    $("nav").removeClass("z-depth-3");
    $("nav").removeClass("ol-dark");
    $("header nav .brand-logo img").removeAttr("style");
  }
}));
