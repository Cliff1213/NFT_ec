// navbar
const btnSearch = document.querySelector('.btn-search-mobile');
const inputSearch = document.querySelector('.input-search-mobile');
const btnBack = document.querySelector('.btn-back');
const navCollapse = document.querySelector('.navbar-collapse');

btnSearch.addEventListener('click', () => {
  navCollapse.classList.remove('show');
  inputSearch.classList.remove('d-none');
})

btnBack.addEventListener('click', () => {
  inputSearch.classList.add('d-none');
})


// swiper
const swiper = new Swiper(".artist-swiper", {
  loop: true,
  speed: 500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
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
  clickable: true,
  },
});


// masonry
// $('.row-masonry').imagesLoaded().progress( function() {
//   $('.row-masonry').masonry(); 
// });

$('.tab-masonry').on('shown.bs.tab', function () {
  let msnry = Masonry.data($('.row-masonry')[0]);
  $('.row-masonry').imagesLoaded(function () {
    msnry.layout();
  });
});