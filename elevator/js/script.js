$(document).ready(function() {
 $('.our-products__photos').slick({
    slidesToShow: 1,
    dots: true,
   asNavFor: '.description',
 });

 $('.description').slick({
    arrows: false,
    dots: false,
    fade: true,
    slidesToShow: 1,
    asNavFor: '.our-products__photos',
 });

 $('.photo-slider__slider').slick({
   arrows: true,
   dots: true,
   slidesToShow: 1,
 });

   $('.photo-slider__slider .slick-active').next().addClass('none-right');
   $('.photo-slider__slider .slick-active').prev().addClass('none-left'); 
   $('.photo-slider__slider .slick-slide').addClass('slick-slide--none');
   $('.photo-slider__slider .slick-active').next().removeClass('slick-slide--none');
   $('.photo-slider__slider .slick-active').prev().removeClass('slick-slide--none');
   $('.photo-slider__slider .slick-active').removeClass('slick-slide--none');

 $('.photo-slider__slider .slick-arrow').click(function () {
   $('.photo-slider__slider .slick-slide').removeClass('none-left');
   $('.photo-slider__slider .slick-slide').removeClass('none-right');

   $('.photo-slider__slider .slick-slide').addClass('slick-slide--none');

   $('.photo-slider__slider .slick-active').next().removeClass('slick-slide--none');
   $('.photo-slider__slider .slick-active').prev().removeClass('slick-slide--none');
   $('.photo-slider__slider .slick-active').removeClass('slick-slide--none');
   $('.photo-slider__slider .slick-active').next().addClass('none-right');
   $('.photo-slider__slider .slick-active').prev().addClass('none-left');
 });
});

// $('.partners__slider').slick({
//    slidesToShow: 3,
//    rows: 2,
//    dots: true,
//    slidesToScroll: 2,
// });

$(window).on('load', function() {
   if ($(window).width() > 800) {
      $('.partners__slider').slick({
         slidesToShow: 3,
         rows: 2,
         dots: true,
         slidesToScroll: 2,
      });
   } else {
      $('.partners__slider').slick({
         slidesToShow: 1,
         rows: 1,
         dots: true,
         slidesToScroll: 1,
      });
   }
});

$('.similar__slider').slick({
   slidesToShow: 3,
   responsive: [
      {
         breakpoint: 1000,
         settings: {
            slidesToShow: 1,
         },
      },
   ],
});

$('.similar__title a').hover(function () {
   $(this).parent().prev().toggleClass('hover');
});

;
let scrollPrev = 0;

$('body').scroll(function() {
   let width = $('body').width();
   let scrolled = $('body').scrollTop();

   if ($(this).scrollTop() >= 10) {
      $('.header').addClass('header--scroll');
      $('.header__mobile').addClass('header__mobile--scroll');
   } else {
      $('.header').removeClass('header--scroll');
      $('.header__mobile').removeClass('header__mobile--scroll');
   }

   if ($(this).scrollTop() >= 50 && scrollPrev < scrolled) {
      $('.header').addClass('header--out');
      $('.header__mobile').addClass('header__mobile--out');
   } else {
      $('.header').removeClass('header--out');
      $('.header__mobile').removeClass('header__mobile--out');
   }

   scrollPrev = scrolled;
});

$('.header__mobile').click(function() {
   if (!$('.header').hasClass('header--scroll')) {
      $('.header').addClass('header--scroll');
   } else if ($('.header').hasClass('header--scroll') && $('body').scrollTop() < 100) {
      $('.header').removeClass('header--scroll');
   }

   $('.header__navBar').toggleClass('header__navBar--active');
   $('.header__mobile').toggleClass('header__mobile--active');
   $('.header__logo').toggleClass('header__logo--active');

   let mobileText = $('.header__mobile p').text();

   if (mobileText === 'menu') {
      $('.header__mobile p').text('close');
   } else {
      $('.header__mobile p').text('menu');
   }
});;
$('.lang__active').on('click', function () {
   $('.lang__active--none').fadeToggle();
   $('.lang__arrow').toggleClass('active');
});

$('.lang__active--none a').on('click', function () {
   let now = $('.lang__active a').text().trim();
   let next = $(this).text().trim();

   $('.lang__active a').text(next);
   $(this).text(now);

   $('.lang__active--none').fadeToggle();
   $('.lang__arrow').toggleClass('active');
});

$('.mobile__lang a').on('click', function () {
   $('.mobile__lang a').removeClass('active');
   $(this).addClass('active');
});;
$('.header__mobile').on('click', function () {
   $('.mobile').slideToggle();

   if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).children('p').text('Меню');
   } else {
      $(this).addClass('active');
      $(this).children('p').text('Закрити');
   }
});;
$(window).on('load resize', function () {
   if ($(window).width() < 600) {
      $('.contact-form__adaptive').append($('.contact-form__row>.contact-form__info'));
   } else {
      $('.contact-form__row').append($('.contact-form__adaptive>.contact-form__info'));
   }
});;

$('.menu-item').hover(function() {
   $(this).children().children().children('.sub-menu__item:first-of-type').addClass('sub-menu__item--active');
});

$('.sub-menu__item').hover(function() {
   $(this).parents('.sub-menu__list').children().removeClass('sub-menu__item--active');
});

$('.sub-menu__list').mouseleave(function() {
   $(this).children('.sub-menu__item:first-of-type').addClass('sub-menu__item--active');
});

$('.topLine__lang').click(function() {
   $(this).toggleClass('topLine__lang--open');
});

$('.topLine__lang a').click(function() {
   $('.topLine__lang a').removeClass('active');
   $(this).addClass('active');
});
