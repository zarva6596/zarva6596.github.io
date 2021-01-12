// $(document).ready(function() {
//    $('.offers__slider').slick({
//       slidesToShow: 1,
//       asNavFor: ".offers__slider--small",
//       autoplay: true,
//    });

//    $('.offers__slider--small').slick({
//       slidesToShow: 4,
//       arrows: false,
//       infinite: true,
//       variableWidth: true,
//       asNavFor: ".offers__slider",
//    });
// });

// $('.offers__slider--small .slider__item').click(function(e) {
//    let n = e;

//    console.log(n);
//    $('.offers__slider--small').slick('goTo', 0);
// })

$(document).ready(function() {
 $('.our-products__photos').slick({
    slidesToShow: 1,
    dots: true,
   //  centerMode: true,
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
   // infinite: false,
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

$('.partners__slider').slick({
   slidesToShow: 3,
   rows: 2,
   dots: true,
   slidesToScroll: 2,
});

$('.similar__slider').slick({
   slidesToShow: 3,
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
$('.vacancy__item:last-of-type .vacancy__info').slideDown();

$('.vacancy__detail').on('click', function(e) {
   if ($(this).children('.vacancy__open').hasClass('vacancy__open--active')) {
      $(this).children('.vacancy__open').removeClass('vacancy__open--active');
      $(this).parent().parent().children('.vacancy__info').slideUp();
   } else {
      $('.vacancy__open').removeClass('vacancy__open--active');
      $('.vacancy__info').slideUp();
      $(this).children('.vacancy__open').addClass('vacancy__open--active');
      $(this).parent().parent().children('.vacancy__info').slideDown();
   }
});

$('.vacancy__item button').on('click', function(e) {
   let title = $(this).parent().prev().find('.vacancy__title p').text();
   title = title.trim();

   $('.form__head p').text(title);

   $('.form__popup-overly').fadeIn();
});

$('.form').on('click', function(e) {
   $('.form__popup-overly').fadeOut();
});

$('.form__popup-overly').on('click', function(e) {
   if (e.target.id === 'vacancy-popup-overly') {
      $('.form__popup-overly').fadeOut();
   }
});;
$(document).ready(function() {
   let last = $(this).find('.main-heading').text();
   last = last.trim();

   $(this).find('.path__item:last-of-type a').text(last);
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
