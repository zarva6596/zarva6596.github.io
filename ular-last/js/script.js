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

 $('.photo-slider__slider .slick-arrow').click(function () {
   $('.photo-slider__slider .slick-slide').removeClass('none-left');
   $('.photo-slider__slider .slick-slide').removeClass('none-right');
   $('.photo-slider__slider .slick-active').next().addClass('none-right');
   $('.photo-slider__slider .slick-active').prev().addClass('none-left');
 });

 
});

;
let scrollPrev = 0;

$('body').scroll(function() {
   let width = $('body').width();
   let scrolled = $('body').scrollTop();

   if ($(this).scrollTop() >= 100) {
      $('.header').addClass('header--scroll');
      $('.header__mobile').addClass('header__mobile--scroll');
   } else {
      $('.header').removeClass('header--scroll');
      $('.header__mobile').removeClass('header__mobile--scroll');
   }

   if ($(this).scrollTop() >= 100 && scrollPrev < scrolled) {
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
