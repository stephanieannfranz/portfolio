// Creating fixed navigation bar on scroll

var nav = document.querySelector('nav');
var navTop = nav.offsetTop;
var navUl = document.querySelector('nav > ul');

function stickyNav() {
  if (window.scrollY > navTop) {
    nav.classList.add('nav-sticky');
    navUl.classList.add('nav_ul-sticky');
  } else {
    nav.classList.remove('nav-sticky');
    navUl.classList.remove('nav_ul-sticky');
  }
}

window.addEventListener('scroll', stickyNav);
