"use strict";

// navbar
var btnSearch = document.querySelector('.btn-search-mobile');
var inputSearch = document.querySelector('.input-search-mobile');
var btnBack = document.querySelector('.btn-back');
var navCollapse = document.querySelector('.navbar-collapse');
var filterOffcanvas = document.querySelector('.filter-offcanvas');
btnSearch.addEventListener('click', function () {
  navCollapse.classList.remove('show');
  inputSearch.classList.remove('d-none');
});
window.addEventListener('resize', function () {
  var viewWidth = document.documentElement.clientWidth; // console.log(viewWidth);

  if (viewWidth > 992) {
    inputSearch.classList.add('d-none'); // 收合 offcanvas

    $('.filter-offcanvas').offcanvas('hide');
  }
});
btnBack.addEventListener('click', function () {
  inputSearch.classList.add('d-none');
}); // 錢包連結

var modalList = document.querySelector('.modal-list');
var modalListGroup = document.querySelectorAll('.modal-list .link-item');
modalList.addEventListener('click', function (e) {
  modalListGroup.forEach(function (i) {
    return i.classList.remove('item-check');
  });
  e.target.closest('.link-item').classList.add('item-check');
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
  },
  grabCursor: true
}); // swiper of intro

var introSwiper = new Swiper(".intro-swiper", {
  // loop + link = bug
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
  },
  grabCursor: true
}); // masonry（use jQ）
// artwork 收藏品 tag 切換時

$('.tab-masonry').on('shown.bs.tab', function () {
  var msnry = Masonry.data($('.row-masonry')[0]);
  $('.row-masonry').imagesLoaded(function () {
    msnry.layout();
  });
}); // intro 元件 collapse 摺疊收合時

$('.collapse-masonry').on('hidden.bs.collapse', function () {
  var msnry = Masonry.data($('.row-masonry')[0]);
  msnry.layout();
}); // intro 元件 collapse 展開時

$('.collapse-masonry').on('shown.bs.collapse', function () {
  var msnry = Masonry.data($('.row-masonry')[0]);
  msnry.layout();
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
