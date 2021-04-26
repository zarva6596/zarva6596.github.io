$('.newHeader__burgerBtn').on('click', function () {
   $(this).toggleClass('burgerBtn--active');
   $('.newHeader__bigMenu .content .bigNav .menu .menu-item:first-of-type')
      .addClass('menu-item--active');
   $('.newHeader__bigNav .menu .menu-item:first-of-type .sub-menu')
      .addClass('sub-menu--active');
   $('.newHeader__bigMenu .bigMenu__background img')
      .attr('src', `${$('.newHeader__bigMenu .content .bigNav .menu .menu-item:first-of-type > img').attr('src')}`);

   let newHeaderBigMenuItems = $('.newHeader__bigNav .menu .menu-item');

   for (let i = 0; i < newHeaderBigMenuItems.length; i++) {
      $(newHeaderBigMenuItems[i]).children('span').text(`0${i + 1}`);
   }

   $('.bigMenu').toggleClass('bigMenu--active');
   
   if ($(this).hasClass('burgerBtn--active')) {
      $(this).children('span').text('Close');
      $('.newHeader__bottomNav').append($('.newHeader .newHeader__nav .menu'));
   } else {
      $(this).children('span').text('Menu');
      $('.newHeader .newHeader__nav').append($('.newHeader__bottomNav .menu'));
   }
});

$('.newHeader__bigNav .menu .menu-item > a').mouseenter(function () {
   $('.newHeader__bigNav .menu .menu-item').removeClass('menu-item--active');
   $('.newHeader__bigNav .menu .menu-item .sub-menu').removeClass('sub-menu--active');

   let newHeaderImageUrl = $(this).next().attr('src');

   $('.newHeader__bigMenu .bigMenu__background img')
      .attr('src', `${newHeaderImageUrl}`);

   $(this).parent().addClass('menu-item--active');
   $(this).next().next().addClass('sub-menu--active');
});



$(window).on('load', function () {
   $('.newPortfolioNav .menu__item:first-of-type').addClass('menu__item--active');
   $('.newPortfolioNav .sub-menu__item:first-of-type a')
      .addClass('sub-menu__link--active');
});

$('.newPortfolioNav .menu .menu__item').mouseenter(function () {
   $('.newPortfolioNav .menu .menu__item').removeClass('menu__item--active');
   $('.newPortfolioNav .menu .menu__item .sub-menu').removeClass('sub-menu--active');

   $('.newPortfolioNav .sub-menu__item a').removeClass('sub-menu__link--active');

   $('.newPortfolioNav .sub-menu').css('z-index', '-1');
   $(this).children('.sub-menu').css('z-index', '1');

   $(this).children('.sub-menu')
      .children('.sub-menu__item:first-of-type')
      .children('a')
      .addClass('sub-menu__link--active');

   let newHeaderImageUrl = $(this).next().attr('src');

   $(this).addClass('menu__item--active');
});

$('.newPortfolioNav .sub-menu__item').mouseenter(function () {
   $('.newPortfolioNav .sub-menu__item a').removeClass('sub-menu__link--active');
   $(this).children('a').addClass('sub-menu__link--active');
});;
let scrollPrev = 0;

$(document).scroll(function() {
   let width = $(document).width();
   let scrolled = $(document).scrollTop();

   if ($(document).scrollTop() >= 10) {
      $('header').addClass('newHeader--scroll');
      // $('.header__mobile').addClass('header__mobile--scroll');
   } else {
      $('header').removeClass('newHeader--scroll');
      // $('.header__mobile').removeClass('header__mobile--scroll');
   }

   if ($(document).scrollTop() >= 10 && scrollPrev < scrolled) {
      $('header').addClass('newHeader--out');
      // $('header__mobile').addClass('newHeader__mobile--out');
   } else {
      $('header').removeClass('newHeader--out');
      // $('.header__mobile').removeClass('newHeader__mobile--out');
   }

   scrollPrev = scrolled;
});

// $('.header__mobile').click(function() {
//    if (!$('.header').hasClass('header--scroll')) {
//       $('.header').addClass('header--scroll');
//    } else if ($('.header').hasClass('header--scroll') && $(document).scrollTop() < 100) {
//       $('.header').removeClass('header--scroll');
//    }

//    $('.header__navBar').toggleClass('header__navBar--active');
//    $('.header__mobile').toggleClass('header__mobile--active');
//    $('.header__logo').toggleClass('header__logo--active');

//    let mobileText = $('.header__mobile p').text();

//    if (mobileText === 'menu') {
//       $('.header__mobile p').text('close');
//    } else {
//       $('.header__mobile p').text('menu');
//    }
// });;
$('.newPostCarousel__slider').slick({
   variableWidth: true,
   // infinite: false,
   speed: 500,
});;