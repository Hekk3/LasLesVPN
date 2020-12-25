// Burger menu

const nav = document.querySelector('.header__nav');
const burger = document.querySelector('.burger');


const toggleNavMenu = function() {
  nav.classList.toggle('header__nav--active');
  burger.classList.toggle('burger--active');
}

const removeNavMenu = function() {
  nav.classList.remove('header__nav--active');
  burger.classList.remove('burger--active');
}


burger.addEventListener('click', (e) => {
  e.stopPropagation();

  toggleNavMenu();
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_menu = target == nav || nav.contains(target);
    const its_btnMenu = target == burger;
    const menu_is_active = nav.classList.contains('header__nav--active');
    
    if (!its_menu && !its_btnMenu && menu_is_active) {
        removeNavMenu();
    }
});

// End burger menu



// Scroll

const header = document.querySelector('.header');
let lastScrollTop = 0;

document.addEventListener('scroll', () => {


  // Remove mobile header when scrolling
  nav.classList.remove('header__nav--active');
  burger.classList.remove('burger--active');


  let scrollSize = window.pageYOffset;


  if (lastScrollTop > scrollSize) {
    header.classList.remove('header--bottom');
    header.classList.add('header--top');

  } else if (lastScrollTop < scrollSize) {
    header.classList.remove('header--top');
    header.classList.add('header--bottom');
  }

  lastScrollTop = scrollSize;


  window.pageYOffset > 1 ? header.classList.add('header--scroll') : header.classList.remove('header--scroll');
});

// End Scroll



// reviews slider

var reviewsSwiper = new Swiper('.reviews__slider-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  spaceBetween: 50,
  // autoHeight: false,
  slidesPerView: 'auto',

  // If we need pagination
  pagination: {
    el: '.reviews__slider-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews__slider-button-next',
    prevEl: '.reviews__slider-button-prev',
  },
})

// End reviews slider