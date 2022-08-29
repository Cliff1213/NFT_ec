"use strict";

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
});
//# sourceMappingURL=all.js.map
