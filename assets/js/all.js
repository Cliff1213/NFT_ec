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
window.addEventListener('resize', function () {
  var viewWidth = document.documentElement.clientWidth; // console.log(viewWidth);

  if (viewWidth > 992) {
    inputSearch.classList.add('d-none');
  }
});
btnBack.addEventListener('click', function () {
  inputSearch.classList.add('d-none');
}); // swiper of index

var indexSwiper = new Swiper(".index-swiper", {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2.3
    },
    1200: {
      slidesPerView: 2.88
    },
    1400: {
      slidesPerView: 2.9
    }
  },
  spaceBetween: 24,
  effect: 'slide',
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
}); // swiper of intro

var introSwiper = new Swiper(".intro-swiper", {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false
  },
  slidesPerView: 2,
  breakpoints: {
    768: {
      slidesPerView: 4
    }
  },
  spaceBetween: 24,
  effect: 'slide',
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
}); // masonry

$('.tab-masonry').on('shown.bs.tab', function () {
  var msnry = Masonry.data($('.row-masonry')[0]);
  $('.row-masonry').imagesLoaded(function () {
    msnry.layout();
  });
}); // aos

AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,
  offset: 120,
  delay: 0,
  duration: 800,
  easing: 'ease',
  once: true,
  mirror: false,
  anchorPlacement: 'top-bottom'
});
//# sourceMappingURL=all.js.map
