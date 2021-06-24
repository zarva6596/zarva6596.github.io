$('.main-slider__slider').slick({
   arrows: false,
   dots: true, 
   autoplay: true,
});

$('.services__textSlider').slick({
   asNavFor: '.services__boxSlider',
   responsive: [
      {
         breakpoint: 769,
         settings: {
            arrows: false,
         }
      }
   ],
});

$('.services__boxSlider').slick({
   arrows: false,
   variableWidth: true,
   asNavFor: '.services__textSlider',
   responsive: [
      {
         breakpoint: 769,
         settings: {
            arrows: true,
            dots: true,
         }
      }
   ],
});

$('.products__slider').slick({
   variableWidth: true,
   responsive: [
      {
         breakpoint: 769,
         settings: {
            dots: true,
         }
      }
   ],
});

let productsTabs = $('.products__menu > .products__item');
let whereTabs = $('.where__menu > .where__item');

$(window).on('load resize', function () {
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
});;