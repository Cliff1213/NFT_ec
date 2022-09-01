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
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints: {
  576: {
    slidesPerView: 2
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
$('.artwork-list').imagesLoaded().progress( function() {
  $('.artwork-list').masonry(); 
});