let colorTop = $('.main > section').css('background-color');
let color = colorTop.split("(")[1].split(")")[0]
   .split(',').map(a => +a).reduce((a, b) => a + b);

$(document).ready(function () {
   if (color === 765) {
      $('.header').addClass('header--scroll');
      $('.header__mobile').addClass('header__mobile--scroll');
   }
});;
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
   
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});;
let scrollPrev = 0;

$('body').scroll(function() {
   let width = $('body').width();
   let scrolled = $('body').scrollTop();

   if ($(this).scrollTop() >= 100) {
      $('.header').addClass('header--scroll');
      $('.header__mobile').addClass('header__mobile--scroll');
   } else if (color !== 765) {
      $('.header').removeClass('header--scroll');
      $('.header__mobile').removeClass('header__mobile--scroll');
   }

   if ($(this).scrollTop() >= 100 && scrollPrev < scrolled) {
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
$(document).ready(function() {
   $('.insights__slider').slick({
      infinite: false,
      variableWidth: true,
      slidesToShow: 3,

      responsive: [
         {
            breakpoint: 1600,
            settings: {
               variableWidth: true,
               slidesToShow: 2,
            },
         },
         {
            breakpoint: 1100,
            settings: {
               slidesToShow: 1,
               arrows: false,
               dots: true,
            }
         }
      ],
   });
});
$(function() {
   $('input').focus(function() {
      $(this).parent().addClass('input--active');
   });

   $('input').blur(function() {
      $(this).parent().removeClass('input--active');
   });

   $('textarea').focus(function() {
      $(this).parent().addClass('input--active');
   });

   $('textarea').blur(function() {
      $(this).parent().removeClass('input--active');
   });
});;
let items = $(".posts__list .posts__item");
let numItems = items.length;
let perPage = 3;

items.slice(perPage).hide();

$('#pagination-container').pagination({
   items: numItems,
   itemsOnPage: perPage,
   displayedPages: 1,
   edges: 1,

   onPageClick: function (pageNumber) {
      let showFrom = perPage * (pageNumber - 1);
      let showTo = showFrom + perPage;

      items.hide().slice(showFrom, showTo).show();
   }
});;

$(function() {
})

