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
   $('.topLine__lang a').removeClass('active');
   $(this).addClass('active');
});
