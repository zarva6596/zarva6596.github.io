$(window).on('load resize', function() {
   if ($(window).width() > 1020) {
      $('header>.header').append($('.mobile>.header__nav'));
      $('header>.header').append($('.mobile>.header__login'));
   } else {
      $('header>.mobile').append($('.header>.header__nav'));
      $('header>.mobile').append($('.header>.header__login'));
   }
});;
$('.head__scrollButton').on('click', function (e) {
   $(this).addClass('head__scrollButton--click');

   e.preventDefault();
   
   setTimeout(() => window.location.replace($(this).attr('href')), 400);
   
   setTimeout(function () {
      $('.head__scrollButton').removeClass('head__scrollButton--click');
   }, 1000);
});;
let scrollPrev = 0;

$('body').scroll(function() {
   let width = $('body').width();
   let scrolled = $('body').scrollTop();

   if ($(this).scrollTop() >= 10) {
      $('header').addClass('header--scroll');
      $('.header__mobile').addClass('header__mobile--scroll');
   } else {
      $('header').removeClass('header--scroll');
      $('.header__mobile').removeClass('header__mobile--scroll');
   }

   if ($(this).scrollTop() >= 10 && scrollPrev < scrolled) {
      $('header').addClass('header--out');
      $('header__mobile').addClass('header__mobile--out');
   } else {
      $('header').removeClass('header--out');
      $('.header__mobile').removeClass('header__mobile--out');
   }

   scrollPrev = scrolled;
});

// $('.header__mobile').click(function() {
//    if (!$('.header').hasClass('header--scroll')) {
//       $('.header').addClass('header--scroll');
//    } else if ($('.header').hasClass('header--scroll') && $('body').scrollTop() < 100) {
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
$('.header__mobile').on('click', function () {
   $('header .mobile').slideToggle();

   if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).parent().removeClass('header__active');
      $(this).children('p').text('Menu');
   } else {
      $(this).addClass('active');
      $(this).parent().addClass('header__active');
      $(this).children('p').text('Close');
   }
});;
$('.products-slider__slider').slick({
   slidesToShow: 4,
   slidesToScroll: 1,
   dots: false,
   responsive: [
      {
        breakpoint: 1219,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
         breakpoint: 767,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1,
         }
       },
   ],
});;
$(window).on('load resize', function() {
   if ($(window).width() < 1201) {
      $('.plit .plit__text--mobile').append($('.plit .plit__text p:nth-of-type(2)'));
      $('.plit .plit__text--mobile').append($('.plit .plit__button'));
   } else {
      $('.plit .plit__text').append($('.plit .plit__text--mobile p'));
      $('.plit .plit__text').append($('.plit .plit__text--mobile .plit__button'));
   }
});;
$(window).on('load resize', () => {
   if ($(window).width() < 768) {
      $('.card .card__button a span:last-of-type').text('В кошик');
   } else {
      $('.card .card__button a span:last-of-type').text('Додати в кошик');
   }
});
$(document).on('click', function (e) {
   if (e.target === $('.catalog__select p')[0]) {
      $(e.target).parent().toggleClass('catalog__select--active');
      $('.catalog__select ul').slideToggle();
   } else {
      $('.catalog__select').removeClass('catalog__select--active');
      $('.catalog__select ul').slideUp();
   }
});

$('.catalog__select li').on('click', function () {
   let text = $(this).text();

   console.log(text);

   $('.catalog__select p').text(text);
});;
$(window).on('load resize', function () {
   if($(window).width() < 1200) {
      $('.catalog__mobile').append($('.catalog__filter'));
      $('.catalog__mobile').append($('.catalog__sort'));
   } else {
      $('.catalog__head').append($('.catalog__sort'));
      $('.catalog__siteBar').append($('.catalog__filter'));
   }
});;

$(window).on('load resize', function () {
   if ($(window).width() < 769) {
      $('.mobile__info').prepend($('.header__info'));
      $('.mobile__lang').append($('.menu_language'));
      $('.mobile__logo').append($('.header__logo'));
      $('.mobile__cart-btn').append($('.header__cart'));
      $('.mobile__nav').append($('.menu_navbar'));
      $('.mobile__search').append($('.header__search'));
   } else {
      $('.menu_wrap').append($('.menu_language'));
      $('.header__info-container').append($('.header__info'));
      $('.header__bottom').prepend($('.header__logo'));
      $('.header__bottom').append($('.header__cart'));
      $('.menu_wrap').prepend($('.menu_navbar'));
      $('.header__search-container').append($('.header__search'));
   }
});

$('.mobile__menu-btn').on('click', function () {
   $(this).toggleClass('mobile__menu-btn--open');
   $('.mobile__menu').slideToggle();
   $('.mobile__search-btn').toggleClass('mobile__search-btn--hide');
   $('.mobile__phone-btn').toggleClass('mobile__phone-btn--hide')
});

$('.mobile__search-btn').on('click', function () {
   $('.mobile__search').fadeIn();

   $(document).on('click', function (e) {
      if ($(e.target).hasClass('mobile__search')) {
         $('.mobile__search').fadeOut();
      }
   });
});

$('.header__search').on('click', function () {
   if ($(window).width() > 768) {
      $('.header__search__fon').fadeIn();

      $(document).on('click', function (e) {
         if ($(e.target).hasClass('header__search__fon')
            || $(e.target).hasClass('mobile__search')) {
            $('.header__search__fon').fadeOut();
         }
      });
   };

   $('.autocomplete-suggestions').fadeIn();

   $(document).on('click', function (e) {
      if ($(e.target).hasClass('header__search__fon')
         || $(e.target).hasClass('mobile__search')) {
         $('.autocomplete-suggestions').fadeOut();
      }
   });
});

let nav__item = $('.menu-item');

for (let i = 0; i < nav__item.length; i++) {
   if ($(nav__item[i]).children().hasClass('sub-menu')) {
      let arrow = $('<span class="arrow"></span>');
      $(nav__item[i]).append($(arrow));
   }
}

$('.our-works__item:last-of-type a span').text('Переглянути усі роботи');