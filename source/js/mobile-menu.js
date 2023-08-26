let nav = document.querySelector('.header__navigation');
let burger = document.querySelector('.header__toggle');

nav.classList.remove('header__navigation--nojs');

burger.onclick = function() {
  nav.classList.toggle('header__navigation--closed'),
  nav.classList.toggle('header__navigation--opened');
};
