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
      
      if ($(window).width() > 768) {
         $('.newHeader .newHeader__nav').append($('.newHeader__bottomNav .menu'));
      }
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

   if ($(window).width() < 770) {
      $('.sub-menu__title').text($(this).text().trim());
      $(this).parent().parent().parent().css('transform', 'translateX(-100vw)');
      $(this).parent().parent().parent().next().next().css('transform', 'translateX(-100vw)');
   }
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
});

$('.sub-menu__back').on('click', function () {
   $(this).parent().parent().parent().parent().css('transform', 'translateX(0)');
   $(this).parent().parent().parent().parent().next().next().css('transform', 'translateX(0)');
});;
let scrollPrev = 0;

$(document).scroll(function() {
   let width = $(document).width();
   let scrolled = $(document).scrollTop();

   let headerHeight = $('header').outerHeight();

   if ($(document).scrollTop() >= 10) {
      $('header').addClass('newHeader--scroll');

      $('.bigMenu--active').css('height', `calc(100vh + ${headerHeight}px)`);
      // $('.header__mobile').addClass('header__mobile--scroll');
   } else {
      $('header').removeClass('newHeader--scroll');
      $('.bigMenu--active').css('height', `100vh`);
      // $('.header__mobile').removeClass('header__mobile--scroll');
   }

   if ($(document).scrollTop() >= 10 && scrollPrev < scrolled) {
      $('header').addClass('newHeader--out');
      // $('header__mobile').addClass('newHeader__mobile--out');
   } else {
      $('header').removeClass('newHeader--out');
      $('.bigMenu--active').css('height', `100vh`);
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
   dots: true,
   speed: 500,
   cssEase: 'linear',
   responsive: [
      {
         breakpoint: 1250,
         settings: {
            variableWidth: false,
            // centerMode: true,
         }
      }
   ]
});;
$(window).on('load resize', function () {
   let choosePhotoItem = $('.newChoose__photoItem');

   let firstTop = 263;
   let firstTopMob = $(choosePhotoItem[0]).position().top;

   for (let i = 0; i < choosePhotoItem.length; i++) {
      if ($(window).width() > 1024) {
         let sidePadding = i === 0 || i=== 1 || (i % 2 === 0 && i % 3 !== 0 && i % 6 !== 0 && i !== 2)
         ? '20vw' : i % 3 === 0 || i % 6 === 0 ? '25vw'
         : '17vw';

         i % 2 === 0 
            ? $(choosePhotoItem[i]).css('right', sidePadding) 
            : $(choosePhotoItem[i]).css('left', sidePadding);

         $(choosePhotoItem[i]).css({
            'top': `${firstTop}px`,
            'z-index': '0'
         });

         firstTop += (i % 2 === 0) ? 160 : 320;
      } else {
         i % 2 === 0
            ? $(choosePhotoItem[i]).css('left', '0')
            : $(choosePhotoItem[i]).css('right', '0');

            $(choosePhotoItem[i]).css({
               'top': `${firstTopMob}px`,
               'z-index': '0'
            });
   
            firstTopMob += i === 0
               ? $(choosePhotoItem[i]).height() + 8
               : i === 1 ? $(choosePhotoItem[i]).height() + 157
               : i === 2 ? $(choosePhotoItem[i]).height() + 67
               : i === 3 ? $(choosePhotoItem[i]).height() + 70
               : i === 4 ? $(choosePhotoItem[i]).height() - 16
               : $(choosePhotoItem[i]).height() + 160;
      }
   }
});;
$(window).on('load resize', function () {
   if ($(window).width() < 768) {
      $('.newHeader__nav.nav').append($('.newHead__lang .lang__list'));
      $('.newHeader__bottomNav').append($('.newHeader .newHeader__nav .menu'));
   } else {
      $('.newHead__lang').append($('.newHeader__nav .lang__list'));

      if (!$('.newHeader__burgerBtn').hasClass('burgerBtn--active')) {
         $('.newHeader .newHeader__nav').append($('.newHeader__bottomNav .menu'));
      }
   }
});;
$(window).on('load resize', function() {
   if ($(window).width() < 768) {
      $('.newPortfolioNav__mobileBtn').append($('.newPortfolioNav__button'));
   }
});;
$('.ourTeam__slider').slick({
   slidesToShow: 3,
   centerMode: true,
});;
$('.portfolio-main')
   .prev()
   .children('.verticalLines')
   .css({
      'visibility': 'hidden',
      'opacity': '0',
   });

let portfolioMenuItem = $('.newPortfolio__menu-item');

for (let i = 0; i < portfolioMenuItem.length; i++) {
   let portfolioSubMenuItem = $(portfolioMenuItem[i])
      .children('.newPortfolio__subMenu')
      .children('.newPortfolio__subMenu-item');

   for (let j = 0; j < portfolioSubMenuItem.length; j++) {
      $(portfolioSubMenuItem[j]).children('span')
         .text(((j + 1) + "").length < 2 ? '0' + (j + 1) : (j + 1));
   }
}

$('.newPortfolio__subMenu').slick({
   slidesToShow: 1,
   variableWidth: true,
   infinite: false,
   dots: true,
});

let portfolioItem = $('.newPortfolio__menu-item');

$(portfolioItem[0]).addClass('newPortfolio__menu-item--active');

$('.newPortfolio__menu-item').mouseenter(function () {
   $('.newPortfolio__menu-item').removeClass('newPortfolio__menu-item--active');

   $(this).addClass('newPortfolio__menu-item--active');
});

$('.newPortfolio__content').mouseleave(function () {
   $('.newPortfolio__menu-item').removeClass('newPortfolio__menu-item--active');

   $(portfolioItem[0]).addClass('newPortfolio__menu-item--active');
});;