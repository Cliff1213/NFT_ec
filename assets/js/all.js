"use strict";

// navbar
var btnSearch = document.querySelector('.btn-search-mobile');
var inputSearch = document.querySelector('.input-search-mobile');
var btnBack = document.querySelector('.btn-back');
var navCollapse = document.querySelector('.navbar-collapse');
btnSearch.addEventListener('click', function () {
  navCollapse.classList.remove('show');
  inputSearch.classList.remove('d-none');
});
btnBack.addEventListener('click', function () {
  inputSearch.classList.add('d-none');
}); // swiper

var swiper = new Swiper(".artist-swiper", {
  loop: true,
  speed: 500,
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2.5
    },
    992: {
      slidesPerView: 3
    }
  },
  spaceBetween: 24,
  effect: 'slide',
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
}); // masonry

$('.artwork-list').imagesLoaded().progress(function () {
  $('.artwork-list').masonry();
});
//# sourceMappingURL=all.js.map
