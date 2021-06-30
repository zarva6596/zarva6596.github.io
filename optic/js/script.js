$('.main-slider__slider').slick({
   arrows: false,
   dots: true, 
   autoplay: true,
});

$('.services__textSlider').slick({
   asNavFor: '.services__boxSlider',
   swipe: false,
   fade: true,
   autoplay: true,
   responsive: [
      {
         breakpoint: 769,
         settings: {
            arrows: false,
            swipe: true,
         }
      }
   ],
});

$('.services__boxSlider').slick({
   arrows: false,
   variableWidth: true,
   swipe: false,
   asNavFor: '.services__textSlider',
   responsive: [
      {
         breakpoint: 769,
         settings: {
            arrows: true,
            dots: true,
            swipe: true,
         }
      }
   ],
});

$('.products__slider').slick({
   variableWidth: true,
   swipe: false,
   responsive: [
      {
         breakpoint: 769,
         settings: {
            dots: true,
            swipe: true,
         }
      }
   ],
});

let productsTabs = $('.products__menu > .products__item');
let whereTabs = $('.where__menu > .where__item');

$(document).ready(function () {
   $(productsTabs[2]).addClass('products__item--active');
   $(whereTabs[1]).addClass('where__item--active');

   if ($(window).width() < 1161) {
      $('.footer__column > p').after($('.footer__contacts'));
   }
});

$(productsTabs).on('click', function() {
   $(productsTabs).removeClass('products__item--active');
   $(this).addClass('products__item--active');
});

$(whereTabs).on('click', function () {
   $(whereTabs).removeClass('where__item--active');
   $(this).addClass('where__item--active');
});

$('.reviews__list').slick({
   variableWidth: true,
   swipe: false,
   responsive: [
      {
         breakpoint: 769,
         settings: {
            dots: true,
            swipe: true,
         }
      }
   ],
});

setInterval(() => {
   $('.reviews__item').removeClass('reviews__item--active');
   $('.reviews__item.slick-active').addClass('reviews__item--active');
}, 500);;
let scrollPrev = 0;

$(document).scroll(function() {
   let scrolled = $(document).scrollTop();
   // let headerHeight = $('header').outerHeight();

   // if ($(document).scrollTop() >= 10) {
      // $('header').addClass('header--scroll');

      // $('.bigMenu--active').css('height', `calc(100vh + ${headerHeight}px)`);
      // $('.header__mobile').addClass('header__mobile--scroll');
   // } else {
      // $('header').removeClass('header--scroll');
      // $('.bigMenu--active').css('height', `100vh`);
      // $('.header__mobile').removeClass('header__mobile--scroll');
   // }

   if ($(document).scrollTop() >= 10 && scrollPrev < scrolled) {
      $('header').addClass('header--out');
      // $('header__mobile').addClass('newHeader__mobile--out');
   } else {
      $('header').removeClass('header--out');
      $('.bigMenu--active').css('height', `100vh`);
      // $('.header__mobile').removeClass('newHeader__mobile--out');
   }

   if ($(document).scrollTop() >= 50) {
      $('.arrowUp').css({
         'opacity': '1',
         'visibility': 'visible'
      });
   } else {
      $('.arrowUp').css({
         'opacity': '0',
         'visibility': 'hidden'
      });
   }

   scrollPrev = scrolled;
});

// $(window).on('load resize', function () {
//    if ($('main').hasClass('contacts-main')
//       && $(window).width() > 1000) {
//       $('body').addClass('noScroll');
//    } else {
//       $('body').removeClass('noScroll');
//    }
// });;

$(window).on('load resize', function () {
   if ($(window).width() < 769) {
      $('.header__mobileMenu__content').append($('.header__contacts'));
      $('.header__mobileMenu__content').append($('.header__button'));
   }
});

$('.header__burgerBtn').on('click', function() {
   $('.header__mobileMenu').toggleClass('header__mobileMenu--active');
   $('.header').toggleClass('header--active');
   $(this).toggleClass('header__burgerBtn--active');
   $('body, html').toggleClass('noScroll');
});

$('.mobile__item a').on('click', function () {
   $('.header__burgerBtn').removeClass('header__burgerBtn--active');
   $('.header__mobileMenu').removeClass('header__mobileMenu--active');
   $('body, html').toggleClass('noScroll');
});