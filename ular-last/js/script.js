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

   $('.popup-overly').fadeIn();
});;
$(document).ready(function() {
   let last = $(this).find('.main-heading').text();
   last = last.trim();

   $(this).find('.path__item:last-of-type a').text(last);
});;
let gallery_items = $(".gallery__list .gallery__item");
let gallery_numItems = gallery_items.length;
let gallery_perPage = 12;

gallery_items.slice(gallery_perPage).hide();

$('.gallery__pagination-container').pagination({
   items: gallery_numItems,
   itemsOnPage: gallery_perPage,
   displayedPages: 2,
   edges: 1,

   onPageClick: function (pageNumber) {
      let showFrom = gallery_perPage * (pageNumber - 1);
      let showTo = showFrom + gallery_perPage;

      gallery_items.hide().slice(showFrom, showTo).show();
   }
});;
let products_items = $(".products__list .products__item");
let products_numItems = products_items.length;
let products_perPage = 12;

products_items.slice(products_perPage).hide();

$('.products__pagination-container').pagination({
   items: products_numItems,
   itemsOnPage: products_perPage,
   displayedPages: 2,
   edges: 1,

   onPageClick: function (pageNumber) {
      let showFrom = products_perPage * (pageNumber - 1);
      let showTo = showFrom + products_perPage;

      products_items.hide().slice(showFrom, showTo).show();
   }
});;
$('.filter__item' || '.filter__item p').on('click', function (e) {
   if (($(this).hasClass('active') 
      && !$(e.target).hasClass('sub-filter') 
      && !$(e.target).parents().hasClass('sub-filter'))) {
      $(this).children('.sub-filter').slideUp();
      $(this).removeClass('active');
      
   } else if ($(e.target).hasClass('sub-filter')
      || $(e.target).parents().hasClass('sub-filter')) {
         $(this).children('.sub-filter').slideUp();
         $(this).removeClass('active');
   } else {
      $('.sub-filter').slideUp();
      $('.filter__item').removeClass('active');
      $(this).children('.sub-filter').slideDown();
      $(this).addClass('active');
   }
});

$(document).on('click', function (e) {
   let el = e.target;
   // if (!$(el).hasClass('sub-filter') 
   //    && !$(el).parents().hasClass('sub-filter')
   //    && !$(el).hasClass('filter__item')
   //    && !(el.tagName === 'P')) {
   //    $('.sub-filter').slideUp();
   //    $('.filter__item').removeClass('active');
   // }

   if (!($(el).hasClass('active')) 
      && !($(el).parents().hasClass('active'))) {
      $('.sub-filter').slideUp();
      $('.filter__item').removeClass('active');
   }
});;
$('.product button').on('click', function () {
   let title = $(this).parents().find('.product h1').text();
   title = title.trim();

   $('.form__head p').text(title);
   $('.product .popup-overly').fadeIn();
});

$('.form__close').on('click', function(e) {
   $('.popup-overly').fadeOut();
});

$('.popup-overly').on('click', function(e) {
   if (e.target.id === 'popup-overly') {
      $('.popup-overly').fadeOut();
   }
});;
$(document).ready(function () {
   let tender = $('.tender__item:nth-child(5) p');

   for (let i = 0; i < tender.length; i++) {
      let a = $(tender[i]).text().trim();
      let str = 'Закриті торги';

      if (a === str) {
         // $(tender[i]).parent().parent().addClass('closed');
         $(tender[i]).parent().parent().parent().addClass('closed');
      }
   }
});

let tenders_items = $(".tenders__list .tenders__item");
let tenders_numItems = tenders_items.length;
let tenders_perPage = 7;

tenders_items.slice(tenders_perPage).hide();

$('.tenders__pagination-container').pagination({
   items: tenders_numItems,
   itemsOnPage: tenders_perPage,
   displayedPages: 2,
   edges: 1,

   onPageClick: function (pageNumber) {
      let showFrom = tenders_perPage * (pageNumber - 1);
      let showTo = showFrom + tenders_perPage;

      tenders_items.hide().slice(showFrom, showTo).show();
   }
});

$('.tender__list').on('click', function () {
   if ($(this).parent().children('.tender__info').hasClass('opened')) {
      $(this).parent().children('.tender__info').slideUp();
      $(this).parent().children('.tender__info').removeClass('opened');
   } else {
      $('.tender__info').slideUp();
      $('.tender__info').removeClass('opened');
      $(this).parent().children('.tender__info').slideDown();
      $(this).parent().children('.tender__info').addClass('opened');
   }
});;
$('.lang__active').on('click', function () {
   $('.lang__active--none').fadeToggle();
   $('.lang__arrow').toggleClass('active');
});

$('.lang__active--none p').on('click', function () {
   let now = $('.lang__active p').text().trim();
   let next = $(this).text().trim();

   $('.lang__active p').text(next);
   $(this).text(now);

   $('.lang__active--none').fadeToggle();
   $('.lang__arrow').toggleClass('active');
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
