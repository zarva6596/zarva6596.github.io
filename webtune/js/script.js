$('.newHeader__burgerBtn').on('click', function () {
   $('html, body').animate({
      scrollTop: !$('.newBrief').hasClass('newBrief--active') && !$('.bigMenu').hasClass('bigMenu--active')
         ? $(document).scrollTop() + 100
         : $(document).scrollTop() - 100,
   }, 1000);

   if ($('.newBrief').hasClass('newBrief--active')) {
      $('header').removeClass('newHeader--scroll');
      $('.newBrief').removeClass('newBrief--active');
      $(this).toggleClass('burgerBtn--active');
      $('.newHead__content').append($('.newHead__links'));
      $('.newHeader__content').css('background-color', 'transparent');

      if ($('.newHeader__burgerBtn').hasClass('burgerBtn--active')) {
         $('.newHeader__burgerBtn').children('span').text('Close');
      } else {
         $('.newHeader__burgerBtn').children('span').text('Menu');
      }

      $('body').toggleClass('noScroll');
      $('html').toggleClass('noScroll');

      return;
   }

   $('body').toggleClass('noScroll');
   $('html').toggleClass('noScroll');
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

   $('.lang__list').toggleClass('lang__list--active');

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
   let scrolled = $(document).scrollTop();

   let headerHeight = $('header').outerHeight();
   if ($(document).scrollTop() >= 10) {
      $('header').addClass('newHeader--scroll');

      $('.bigMenu--active').css('height', `calc(100vh + ${headerHeight}px)`);
      $('.header__mobile').addClass('header__mobile--scroll');
   } else {
      $('header').removeClass('newHeader--scroll');
      $('.bigMenu--active').css('height', `100vh`);
      // $('.header__mobile').removeClass('header__mobile--scroll');
   }

   if ($(document).scrollTop() >= 10 && scrollPrev < scrolled && $(window).width() > 475) {
      $('header').addClass('newHeader--out');
      // $('header__mobile').addClass('newHeader__mobile--out');
   } else {
      $('header').removeClass('newHeader--out');
      $('.bigMenu--active').css('height', `100vh`);
      // $('.header__mobile').removeClass('newHeader__mobile--out');
   }

   if ($(document).scrollTop() >= 50) {
      $('.arrowUp').css('right', '50px');
   } else {
      $('.arrowUp').css('right', '-100px');
   }

   scrollPrev = scrolled;
});

$(window).on('load resize', function () {
   if ($('main').hasClass('contacts-main')
      && $(window).width() > 1000) {
      $('body').addClass('noScroll');
   } else {
      $('body').removeClass('noScroll');
   }
});;
$('.newPostCarousel__slider').slick({
   variableWidth: true,
   dots: false,
   arrows: false,
   speed: 500,
   cssEase: 'linear',
   asNavFor: '.newPostCarousel__slider--small',
   responsive: [
      {
         breakpoint: 1250,
         settings: {
            variableWidth: false,
            arrows: true,
            dots: true,
         }
      }
   ]
});

$('.newPostCarousel__slider--small').slick({
   variableWidth: true,
   dots: true,
   arrows: true,
   speed: 500,
   cssEase: 'linear',
   asNavFor: '.newPostCarousel__slider',
   responsive: [
      {
         breakpoint: 1250,
         settings: {
            variableWidth: false,
         }
      }
   ]
});;
$(window).on('load resize', function () {
   if ($('main').children().hasClass('newChoose')) {
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

if ($(window).width() > 475) {
   $('.portfolio-main').next().css('display', 'none');
} else {
   $('.portfolio-main').next().css({
      'display': 'block',
      'position': 'absolute',
      'width': '100vw',
      'height': '0',
      'top': '0px',
      'overflow': 'hidden',
   });

   $('.portfolio-main').prev().css({
      'background-color': '#1d153d'
   });
}

$(window).on('load', function () {
   $('.portfolio-main').next().css({
      'top': `${$(document).height()}px`,
      'height': 'fit-content'
   });
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
   responsive: [
      {
         breakpoint: 751,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 475,
         settings: 'unslick'
      }
   ]
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
});

$('.newPortfolio__menu-item > a').on('click', function (e) {
   if ($(window).width() < 476) {
      e.preventDefault();

      $('.newPortfolio__subMenu').slideUp();
      $(this).next().slideDown();

      $('.portfolio-main').next().css({
         'height': '0',
         'top': '0px',
         'overflow': 'hidden',
      });

      setTimeout(() => {
         $('.portfolio-main').next().css({
            'height': 'fit-content',
            'display': 'block',
            'position': 'absolute',
            'width': '100vw',
            'top': `${$(document).height()}px`,
         });
      }, 500);
   }
});;
$(window).on('load resize', function () {
   if ($(window).width() < 600) {
      $('.newAtWork__content').append($('.newAtWork__list'));
   } else {
      $('.newAtWork__row:first-child').append($('.newAtWork__list'));
   }
});;
$('.newBrief__form__price input, .newBrief__form__price textarea')
   .on('change', function () {
   if ($(this).val() !== "") {
      $(this).next().addClass('active');
   } else {
      $(this).next().removeClass('active');
   }
});

$('.newBrief__form__file label').on('click', function () {
   $(this).addClass('active');
});

$('.newBrief__form__file input').on('change', function () {
   let text = $(this).val().split('\\');
   text = text[text.length - 1];

   $('.newBrief__form__file span').text(text);

   if ($(this).val() === '') {
      $(this).next().removeClass('active');
   }
});

$(window).on('load', function () {
   $('.newBrief__form').slick({
      infinite: false,
      dots: true,
      swipe: false,
      adaptiveHeight: true,
   });

   $('.slick-prev').text('Крок назад');
   $('.slick-next').text('Наступний крок');
});

$('.oneClick__button, .newHead__contactBtn, .newHeader__contactBtn').on('click', function () {
   $('.newHeader__bigMenu').removeClass('bigMenu--active')

   $('header').addClass('newHeader--scroll');
   $('.newBrief__content').append($('.newHead__links'));
   $('.newBrief').addClass('newBrief--active');
   $('.newHeader__burgerBtn').addClass('burgerBtn--active');
   $('body').addClass('noScroll');
   $('html').addClass('noScroll');
   $('.newHeader__content').css('background-color', '#1d153dfa');

   if ($('.newHeader__burgerBtn').hasClass('burgerBtn--active')) {
      $('.newHeader__burgerBtn').children('span').text('Close');
   } else {
      $('.newHeader__burgerBtn').children('span').text('Menu');
   }
});
$(window).on('load resize', function () {
   if ($(window).width() < 700) {
      $('.newMission__column:first-of-type').after($('.newMission__count'));
   }
});;

$(window).on('load resize', function() {
   if ($(window).width() < 769) {
      $('.map').prepend($('.newContacts__address'));
   }
});

// if ((navigator.userAgent.match(/iPhone/))) {
//    alert('iphone');
// }

// if (navigator.userAgent.match(/Android/)) {
//    alert('Android');
// }

$('.newServices__item').on('click', function () {
   $('.newServices__item').removeClass('newService__item--active');
   $(this).addClass('newService__item--active');
})