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
// =====================        imagine slider         =========================

$('.imagine__text-slider').slick({
   dots: true,
   asNavFor: '.imagine__photo-slider',
});

$('.imagine__photo-slider').slick({
   asNavFor: '.imagine__text-slider',
   arrows: false,
});

function addCalculatorSlidsImagine () {
   let imagineCount = $('.imagine__text-slider .slick-dots li').length;
   let imagineActiveNumber = $('.imagine__text-slider .slick-dots .slick-active button').text().trim();

   let imagineCountDom = $(`<div class="imagine__count" id="imagine__count"><span>${imagineActiveNumber}</span><span></span><span>${imagineCount}</span></div>`);
   $('.imagine__count').remove();
   $('.imagine__text-slider').prepend(imagineCountDom);
}

$(window).on('load', addCalculatorSlidsImagine);

$('.imagine .slick-arrow').on('click', addCalculatorSlidsImagine);

// =======================      end imagine slider          =========================

// =======================      trust slider                =========================

$('.trust__slider').slick({
   slidesToShow: 2,
   slidesToScroll: 2,
   dots: true,
   responsive: [
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
   ],
});

$('.slick-prev').text('Prev');

function addCalculatorSlidsTrust () {
   let trustCount = $('.trust__slider .slick-dots li').length;
   let trustActiveNumber = $('.trust__slider .slick-dots .slick-active button').text().trim();

   let trustCountDom = $(`<div class="trust__count"><span>${trustActiveNumber}</span><span></span><span>${trustCount}</span></div>`);
   $('.trust__count').remove();
   $('.trust__slider').prepend(trustCountDom);
}

$(window).on('load', addCalculatorSlidsTrust);

$('.trust .slick-arrow').on('click', addCalculatorSlidsTrust);;
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
$(document).ready(function() {
   let last = $(this).find('.main-heading').text();
   last = last.trim();

   $(this).find('.path__item:last-of-type a').text(last);
});;
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
let paragraph = $('.onePost__content p:first-of-type');
let text = paragraph.text().trim();
let firstLetter = text[0];

let newText = '';

for (let i = 1; i < text.length; i++) {
   newText += text[i];
}

paragraph.text(newText);

$('.onePost__content p:first-of-type')
   .prepend($('<div class="onePost__firstLetter"></div>'));

$('.onePost__firstLetter').text(firstLetter);;
$(window).on('load resize', function () {
   if ($(window).width() < 1000) {
      let postsItem = $('.posts__item');

      for (let i = 0; i < postsItem.length; i++) {
         $(postsItem[i]).find('.post__photo--mobile')
            .append($(postsItem[i])
            .find('.post__photo a'));
      }
   } else {
      let postsItem = $('.posts__item');

      for (let i = 0; i < postsItem.length; i++) {
         $(postsItem[i]).find('.post__photo')
            .append($(postsItem[i])
            .find('.post__photo--mobile a'));
      }
   }
});;
$(window).on('load resize', function () {
   if ($(window).width() < 600) {
         $('.contacts__mobile').append($('.contacts__row'));
   } else {
      $('.contacts__desktop').append($('.contacts__row'));
   }
});;
$(window).on('load resize', function () {

   if ($(window).width() < 1260) {
      let productsItems = $('.products__item').length;

      if (productsItems % 2 === 0) {
         $('.products__item').css('flex-basis', '50%');
         $('.products__item p').css('max-width', '100%');
      } else {
         $('.products__list').css('justify-content', 'center');
         $('.products__item').css('flex-basis', '33%');
      }
   }
});;