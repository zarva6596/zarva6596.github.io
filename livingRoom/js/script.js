$('.header__lang .lang__active').on('click', function () {
    $('.lang__list').slideToggle();
});

$('.footer__lang p').on('click', function () {
    $(this).toggleClass('active');
    $('.footer__lang ul').slideToggle();
});

$(window).on('load', function () {
    if ($('main').attr('dir') === 'rtl') {
        $('footer').attr('dir', 'rtl');
        $('footer').addClass('reverse');
    }

    if ($('main').hasClass('membership')) {
        $('.header__button').remove();
    }

    setTimeout(function () {
        $('.preloader').css({
            'visibility': 'hidden',
            'opacity': '0'
        });
    }, 5000);
});