$(document).ready(function() {
   $('.offers__slider').slick({
      slidesToShow: 1,
      asNavFor: ".offers__slider--small",
      autoplay: true,
   });

   $('.offers__slider--small').slick({
      slidesToShow: 4,
      arrows: false,
      infinite: true,
      variableWidth: true,
      asNavFor: ".offers__slider",
   });
});

$('.offers__slider--small .slider__item').click(function(e) {
   let n = e;

   console.log(n);
   $('.offers__slider--small').slick('goTo', 0);
});

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
   if ($(this).hasClass('active')) {
      e.preventDefault();
   }

   $('.topLine__lang a').removeClass('active');
   $(this).addClass('active');
});

$('.header__mobile-btn').on('click', function() {
   $(this).toggleClass('header__mobile-btn--active');
   $('.top__mobile').toggleClass('top__mobile--active');
});

$(window).on('load resize', function () {
   if ($(window).width() < 1200) {
      $('.top__mobile .top__mobile-main-nav').append($('header .nav'));
      $('.top__mobile .top__mobile-info').append($('.header__topLine .row'));
      $('.top__mobile .top__mobile-nav').append($('.top__nav'));
      $('.header .header__topLine').prepend($('.top__mobile .topLine__lang'));
   } else {
      $('header').append($('.top__mobile .top__mobile-main-nav .nav'));
      $('.header .header__topLine').prepend($('.top__mobile .top__mobile-info .row'));
      $('.top').append($('.top__mobile .top__mobile-nav .top__nav'));
      $('.topLine__right').append($('.header .header__topLine .topLine__lang'));
   }

   $('.header__topLine').css('opacity', '1');
   $('.header .nav').css('opacity', '1');
});

$('.menu-item__link').on('click', function () {
   if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).next().slideUp();
   } else {
      $('.menu-item__link').removeClass('open');
      $('.sub-menu').slideUp();

      $(this).addClass('open');
      $(this).next().slideToggle();
   }
});

$('.sub-menu__link').on('click', function () {
   if ($(this).hasClass('open')) {
      $(this).removeClass('open');
      $(this).next().slideUp();
   } else {
      $('.sub-menu-item__link').removeClass('open');
      $('.sub-sub-menu').slideUp();

      $(this).addClass('open');
      $(this).next().slideToggle();
   }
});

let n = 0;
let n2;

function visibilityButton () {
   if (n === 0) {
      $('.sub-sub-menu__button--prev').css({
         'visibility': 'hidden',
         'opacity': '0',
      });
   } else {
      $('.sub-sub-menu__button--prev').css({
         'visibility': 'visible',
         'opacity': '1',
      });
   }

   if (n > n2 - 2) {
      $('.sub-sub-menu__button--next').css({
         'visibility': 'hidden',
         'opacity': '0',
      });
   } else {
      $('.sub-sub-menu__button--next').css({
         'visibility': 'visible',
         'opacity': '1',
      });
   }

   // if (n2 <= 2) {
   //    $('.sub-sub-menu__button').css({
   //       'visibility': 'hidden',
   //       'opacity': '0'
   //    })
   // } else {
   //    $('.sub-sub-menu__button').css({
   //       'visibility': 'visible',
   //       'opacity': '1',
   //    });
   // }
}

$('.sub-sub-menu__button--next').on('click', function () {
   n++;
   n2 = $(this).parent().prev().height() / 542 - 1;
   console.log(n, n2);
   $(this).parent().prev().css('left', `-${(n) * 325}px`);

   visibilityButton();
});

$('.sub-sub-menu__button--prev').on('click', function () {
   n--;
   n2 = $(this).parent().prev().height() / 542 - 1;

   $(this).parent().prev().css('left', `${(n + 1) * -325 + 325}px`);

   visibilityButton();
});

$('.sub-sub-menu').mouseleave(function () {
   $(this).children('.sub-sub-menu__list').css('left', `0px`);
   n = 0;

   visibilityButton();
});

$('.sub-sub-menu').mouseenter(function () {
   n2 = $(this).children('.sub-sub-menu__list').height() / 542 - 1;

   visibilityButton();
});


