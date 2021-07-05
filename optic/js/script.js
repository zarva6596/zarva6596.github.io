let productsTabs = $('.products__menu > .products__item');
let whereTabs = $('.where__menu > .where__item');

$(document).ready(function () {
   $(productsTabs[2]).addClass('products__item--active');
   $(whereTabs[1]).addClass('where__item--active');

   if ($(window).width() < 1161) {
      $('.footer__column > p').after($('.footer__contacts'));
   }

   $('.main-slider__slider').slick({
      arrows: false,
      dots: true, 
      autoplay: true,
   });
   
   $('.services__textSlider').slick({
      asNavFor: '.services__boxSlider',
      swipe: false,
      fade: true,
      autoplay: true,
      responsive: [
         {
            breakpoint: 769,
            settings: {
               arrows: false,
               swipe: true,
            }
         }
      ],
   });
   
   $('.services__boxSlider').slick({
      arrows: false,
      variableWidth: true,
      swipe: false,
      asNavFor: '.services__textSlider',
      responsive: [
         {
            breakpoint: 769,
            settings: {
               arrows: true,
               dots: true,
               swipe: true,
            }
         }
      ],
   });
   
   $('.products__slider').slick({
      variableWidth: true,
      swipe: false,
      // autoplay: true,
      responsive: [
         {
            breakpoint: 769,
            settings: {
               dots: true,
               swipe: true,
            }
         }
      ],
   });
});

$(productsTabs).on('click', function() {
   $(productsTabs).removeClass('products__item--active');
   // $(productsTabs)
   //    .children('.products__list')
   //    .children('.products__slider').slick('unslick');

   $(this).addClass('products__item--active');
   // $(this)
   //    .children('.products__list')
   //    .children('.products__slider').slick({
   //       variableWidth: true,
   //       swipe: false,
   //       responsive: [
   //          {
   //             breakpoint: 769,
   //             settings: {
   //                dots: true,
   //                swipe: true,
   //             }
   //          }
   //       ],
   //    });
});

$(whereTabs).on('click', function () {
   $(whereTabs).removeClass('where__item--active');
   $(this).addClass('where__item--active');
});

$('.reviews__list').slick({
   variableWidth: true,
   swipe: false,
   responsive: [
      {
         breakpoint: 769,
         settings: {
            dots: true,
            swipe: true,
         }
      }
   ],
});

setInterval(() => {
   $('.reviews__item').removeClass('reviews__item--active');
   $('.reviews__item.slick-active').addClass('reviews__item--active');
}, 500);;
let scrollPrev = 0;

$(document).scroll(function() {
   let scrolled = $(document).scrollTop();
   // let headerHeight = $('header').outerHeight();

   // if ($(document).scrollTop() >= 10) {
      // $('header').addClass('header--scroll');

      // $('.bigMenu--active').css('height', `calc(100vh + ${headerHeight}px)`);
      // $('.header__mobile').addClass('header__mobile--scroll');
   // } else {
      // $('header').removeClass('header--scroll');
      // $('.bigMenu--active').css('height', `100vh`);
      // $('.header__mobile').removeClass('header__mobile--scroll');
   // }

   if ($(document).scrollTop() >= 10 && scrollPrev < scrolled) {
      $('header').addClass('header--out');
      // $('header__mobile').addClass('newHeader__mobile--out');
   } else {
      $('header').removeClass('header--out');
      $('.bigMenu--active').css('height', `100vh`);
      // $('.header__mobile').removeClass('newHeader__mobile--out');
   }

   if ($(document).scrollTop() >= 50) {
      $('.arrowUp').css({
         'opacity': '1',
         'visibility': 'visible'
      });
   } else {
      $('.arrowUp').css({
         'opacity': '0',
         'visibility': 'hidden'
      });
   }

   scrollPrev = scrolled;
});

// $(window).on('load resize', function () {
//    if ($('main').hasClass('contacts-main')
//       && $(window).width() > 1000) {
//       $('body').addClass('noScroll');
//    } else {
//       $('body').removeClass('noScroll');
//    }
// });;
$(window).on('load', function () {
  const script = document.createElement('script');

  // eslint-disable-next-line max-len
  script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCxy-5HcyQgYIRkgUvoMbwI43On1x3ymJ8&callback=initMap';

  script.defer = true;

  window.initMap = function() {
    const position1 = {
      lat: 49.842830626105396,  
      lng: 24.021083026371258,
    };

    const position2 = {
      lat: 49.84095099147086, 
      lng: 24.014566861258828 ,
    };

    const position3 = {
      lat: 49.83677785051392, 
      lng: 24.0034336459409 ,
    };

    const position4 = {
      lat: 49.79384880533213, 
      lng: 24.064877968648148,
    };

    const position5 = {
      lat: 49.84848464175047,  
      lng: 24.02410818162529 ,
    };

    const position6 = {
      lat: 49.872874440058666, 
      lng: 24.039951336357497 ,
    };

    const position7 = {
      lat: 49.82310891240088, 
      lng: 23.97760627392699,
    };
    
    const position8 = {
      lat: 49.78565793451835,  
      lng: 24.058376575812577,
    };

    const map1 = new google.maps.Map(document.getElementById('map1'), {
      center: position1,
      zoom: 15,
      disableDefaultUI: true,
    });

    const map2 = new google.maps.Map(document.getElementById('map2'), {
      center: position2,
      zoom: 15,
      disableDefaultUI: true,
    });

    const map3 = new google.maps.Map(document.getElementById('map3'), {
      center: position3,
      zoom: 15,
      disableDefaultUI: true,
    });

    const map4 = new google.maps.Map(document.getElementById('map4'), {
      center: position4,
      zoom: 15,
      disableDefaultUI: true,
    });

    const map5 = new google.maps.Map(document.getElementById('map5'), {
      center: position5,
      zoom: 15,
      disableDefaultUI: true,
    });

    const map6 = new google.maps.Map(document.getElementById('map6'), {
      center: position6,
      zoom: 15,
      disableDefaultUI: true,
    });

    const map7 = new google.maps.Map(document.getElementById('map7'), {
      center: position7,
      zoom: 15,
      disableDefaultUI: true,
    });

    const map8 = new google.maps.Map(document.getElementById('map8'), {
      center: position8,
      zoom: 15,
      disableDefaultUI: true,
    });

    const marker1 = new google.maps.Marker({
      position: position1,
      map: map1,
     //  icon: '<?php echo get_template_directory_uri(); ?>/img/icons/chicken-icon.svg',
    });

    const marker2 = new google.maps.Marker({
      position: position2,
      map: map2,
     //  icon: '<?php echo get_template_directory_uri(); ?>/img/icons/chicken-icon.svg',
    });

    const marker3 = new google.maps.Marker({
      position: position3,
      map: map3,
     //  icon: '<?php echo get_template_directory_uri(); ?>/img/icons/chicken-icon.svg',
    });

    const marker4 = new google.maps.Marker({
      position: position4,
      map: map4,
     //  icon: '<?php echo get_template_directory_uri(); ?>/img/icons/chicken-icon.svg',
    });

    const marker5 = new google.maps.Marker({
      position: position5,
      map: map5,
     //  icon: '<?php echo get_template_directory_uri(); ?>/img/icons/chicken-icon.svg',
    });

    const marker6 = new google.maps.Marker({
      position: position6,
      map: map6,
     //  icon: '<?php echo get_template_directory_uri(); ?>/img/icons/chicken-icon.svg',
    });

    const marker7 = new google.maps.Marker({
      position: position7,
      map: map7,
     //  icon: '<?php echo get_template_directory_uri(); ?>/img/icons/chicken-icon.svg',
    });

    const marker8 = new google.maps.Marker({
      position: position8,
      map: map8,
     //  icon: '<?php echo get_template_directory_uri(); ?>/img/icons/chicken-icon.svg',
    });
  };

  document.head.appendChild(script);
});

;

$(window).on('load resize', function () {
   if ($(window).width() < 769) {
      $('.header__mobileMenu__content').append($('.header__contacts'));
      $('.header__mobileMenu__content').append($('.header__button'));
   }

   $('a.eapps-link').attr('style', 'display: none !important');
   $('.elfsight-app-70ee3dd4-8ff8-46fe-8189-4d14b8e4f78e.eapps-instagram-feed').css('z-index', '1');
});

$(document).ready(function () {
   if ($(window).width() < 769) {
      let phone = $('.header__contacts p:last-of-type a').clone();

      $('.header__logo').after(phone);
   }

   let selectValue = $('.send__google .send__option');
   let hrefA = $(selectValue[0]).children('span:last-of-type').text();

   $('.send__google .send__select > p > span:first-of-type')
      .text(`${$(selectValue[0]).children('span:first-of-type').text()}`);
   $('.send__google__content > a').attr('href', `${hrefA}`);
});

$('.send__google .send__select > p').on('click', function () {
   $(this).toggleClass('active');
   $(this).next().slideToggle();
});

$('.send__option').click(function () {
   let hrefA = $(this).children('span:last-of-type').text();
   let nameSelect = $(this).children('span:first-of-type').text();
   $('.send__google .send__select > p > span:first-of-type').text(`${nameSelect}`);
   $('.send__google__content > a').attr('href', `${hrefA}`);
   $('.send__options').slideToggle();
});

$(window).on('load', function () {
   $('.header, .footer, .section').css({
      'visibility': 'visible',
      'opacity': '1',
   });
});

$('.header__burgerBtn').on('click', function() {
   $('.header__mobileMenu').toggleClass('header__mobileMenu--active');
   $('.header').toggleClass('header--active');
   $(this).toggleClass('header__burgerBtn--active');
   $('body, html').toggleClass('noScroll');
});

$('.mobile__item a').on('click', function () {
   $('.header__burgerBtn').removeClass('header__burgerBtn--active');
   $('.header__mobileMenu').removeClass('header__mobileMenu--active');
   $('body, html').toggleClass('noScroll');
});

$(document).on('click', function (e) {
   if ($(e.target).hasClass('pop') || $(e.target).hasClass('popup')) {
      $('.popup').fadeToggle();
   }
});

$('.contactButton__mainButton, .contactButton__bg').on('click', function() {
   $('.contactButton__mainButton').toggleClass('contactButton__mainButton--active');
   $('.contactButton__list').fadeToggle();
   $('.contactButton__bg').fadeToggle();
});