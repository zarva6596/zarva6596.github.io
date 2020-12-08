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
});;

$(function() {
})

$('body').scroll(function() {
   let width = $('body').width();

   if ($(this).scrollTop() >= 100) {
      $('.header').addClass('header--scroll');
      $('.header__mobile').addClass('header__mobile--scroll');
   } else {
      $('.header').removeClass('header--scroll');
      $('.header__mobile').removeClass('header__mobile--scroll');
   }
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
})
