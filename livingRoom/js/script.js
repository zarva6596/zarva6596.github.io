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
    }, 1000);

    $('.welcome__list, .work__list, .events__list').slick({
        arrows: false,
        infinite: false,
        variableWidth: true,
    });

    let date = new Date();

    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let dates = $('.date__item');

    for (let i = 0; i < dates.length; i++) {
        let newDate = new Date(date.getFullYear(), date.getMonth(), date.getDate() + i)
        $(dates[i]).children('.date__month').text(months[newDate.getMonth()]);
        $(dates[i]).children('.date__day').text(days[newDate.getDay()]);
        $(dates[i]).children('.date__num').text(newDate.getDate());
    }
});

$('.date__item').on('click', function () {
    $('.date__item').removeClass('date__item--active');
    $(this).addClass('date__item--active');
});


let first;

$('.time__item').on('click', function (e) {
    if (!$('.time__item').hasClass('time__item--active')) {  
        $(this).addClass('time__item--active');
        $(this).css('border-radius', '19px')
        first = $(this);
    } else if ($(this).hasClass('time__item--active') 
        && !$(this).next().hasClass('time__item--active') 
        && !$(this).prev().hasClass('time__item--active')) {
            $(this).removeClass('time__item--active');
            $(this).removeAttr('style');
    } else {
        $(first).removeAttr('style');
        first = undefined;

        $(this).addClass('timeOut');
        let times = $('.time__item');
        let start;
        let end;

        for (let i = 0; i < times.length; i++) {
            if ($(times[i]).hasClass('time__item--active') && start === undefined) {
                start = i;
            }

            if ($(times[i]).hasClass('timeOut')) {
                end = i;
            }
        }

        $('.time__item').removeClass('time__item--active');
        $('.time__item').removeAttr('style');
        $('.time__item').removeClass('timeOut');

        if (start <= end) {
            for (let i = start; i <= end; i++) {
                $(times[i]).addClass('time__item--active');
            }

            $(times[start]).css('border-radius', '19px 0 0 19px');
            start === end 
                ? $(times[end]).css('border-radius', '19px')
                : $(times[end]).css('border-radius', '0 19px 19px 0');
        } 

        if (start > end) {
            for (let i = end; i <= start; i++) {
                $(times[i]).addClass('time__item--active');
            }

            $(times[start]).css('border-radius', '0 19px 19px 0');
            start === end 
                ? $(times[end]).css('border-radius', '19px')
                : $(times[end]).css('border-radius', '19px 0 0 19px');
        }
    }
});

$('.tariff__button').on('click', function () {
    $('.tariff__button').removeClass('tariff__button--active');
    $(this).addClass('tariff__button--active');   
    
    let start = +$(this).attr('class').split(' ')[0] - 1;

    if ($('.tariff__cards').hasClass('tariff__cards--active')) {
        $('.tariff__cards').slideUp();
        $('.tariff__cards').slick('unslick');
        $('.tariff__cards').removeClass('tariff__cards--active');
        $(this).click();
    } else {
        $('.tariff__cards').addClass('tariff__cards--active');

        $('.tariff__cards').slick({
            arrows: false,
            variableWidth: true,
            infinite: false,
            initialSlide: start,
        });
    
        $('.tariff__cards').slideDown();
    }
});