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



$('.artwork-list').imagesLoaded().progress( function() {
  $('.artwork-list').masonry(); 
});
