var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');
var headWrap = document.querySelector('.page-header__wrapper');

navMain.classList.remove('main-nav--nojs');
headWrap.classList.add('page-header__wrapper--collapsed');

navToggle.addEventListener('click', function(){
  if(navMain.classList.contains('main-nav--closed')){
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
    headWrap.classList.remove('page-header__wrapper--collapsed');
  } else {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
    headWrap.classList.add('page-header__wrapper--collapsed');
  }
})
