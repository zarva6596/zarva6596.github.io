// $('.products-slider__slider').slick({
//    slidesToShow: 4,
//    slidesToScroll: 1,
//    dots: false,
//    responsive: [
//       {
//         breakpoint: 1219,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         }
//       },
//       {
//          breakpoint: 767,
//          settings: {
//            slidesToShow: 2,
//            slidesToScroll: 1,
//          }
//        },
//    ],
// });

$('.main-slider__slider').slick({
   arrows: false,
   dots: true, 
   autoplay: true,
});

$('.services__textSlider').slick({
   asNavFor: '.services__boxSlider'
});

$('.services__boxSlider').slick({
   arrows: false,
   variableWidth: true,
   asNavFor: '.services__textSlider',
});

$('.products__slider').slick({
   variableWidth: true,
});

let productsTabs = $('.products__menu > .products__item');
let whereTabs = $('.where__menu > .where__item');

$(window).on('load', function () {
   $(productsTabs[2]).addClass('products__item--active');
   $(whereTabs[1]).addClass('where__item--active');
});

$(productsTabs).on('click', function() {
   $(productsTabs).removeClass('products__item--active');
   $(this).addClass('products__item--active');
});

$(whereTabs).on('click', function () {
   $(whereTabs).removeClass('where__item--active');
   $(this).addClass('where__item--active');
});;