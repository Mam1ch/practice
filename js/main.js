document.addEventListener('DOMContentLoaded', function () {

  const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },

    slidesPerView: 2,

  });

  // btn-menu

  let openMenu = document.querySelector('.btn-menu'),
    closeMenu = document.querySelector('.menu-close'),
    menu = document.querySelector('.burger-menu');

  openMenu.addEventListener('click', () => {
    menu.classList.remove('close');
    menu.classList.add('open');
  })

  closeMenu.addEventListener('click', () => {
    menu.classList.remove('open');
    menu.classList.add('close');
  })





});

