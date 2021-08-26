var firebaseConfig = {
    apiKey: "AIzaSyBrexUIWP1IPec_9VGh75d2JicgWdgVZu4",
    authDomain: "livingroom-1.firebaseapp.com",
    projectId: "livingroom-1",
    storageBucket: "livingroom-1.appspot.com",
    messagingSenderId: "516192485585",
    appId: "1:516192485585:web:b08232236003894cb685f0"
};

firebase.initializeApp(firebaseConfig);

let bookingN, year, room, day, month, timeFrom, timeTo, tariff, key;

const bdRooms = firebase.database().ref();
let baseRooms;
let date = new Date;

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const freeTimes = [
    '9:00',
    '10:00',
    '11:00', 
    '12:00',
    '13:00', 
    '14:00',
    '15:00', 
    '16:00',
    '17:00',
    '18:00',
    '19:00', 
    '20:00',
    '21:00', 
    '22:00',
    '23:00', 
    '24:00',
]

bdRooms.child('rooms').get().then((snapshot) => {
    if (snapshot.exists()) {
        baseRooms = snapshot.val();

        for (let i = 0; i < 10; i++) {
            let dateForRoom = new Date(date.getFullYear(), date.getMonth(), date.getDate() + i);
            const yearRoom = dateForRoom.getFullYear();
            const monthRoom = months[dateForRoom.getMonth()];
            const dayRoom = dateForRoom.getDate();

            for (const key in baseRooms) {
                if (!baseRooms[key][yearRoom]
                    || !baseRooms[key][yearRoom][monthRoom]
                    || !baseRooms[key][yearRoom][monthRoom][dayRoom]) {
                    firebase.database().ref(`rooms/${key}/${yearRoom}/${monthRoom}/${dayRoom}`).set({
                        freeTimes, 
                    })
                }
            }
        }
    }
}).catch((error) => {
    console.log(error);
});

function Ready() {
    year = date.getFullYear();
    room = $('input.form__heading').val();
    day = $('input.form__day').val();
    month = $('input.form__month').val();
    timeFrom = +$('input.form__hourAt').val().split(':')[0];
    timeTo = +$('input.form__hourFrom').val().split(':')[0];
    tariff = $('input.form__tariff').val();
}

$('.date__item').on('click', function() {
    $('section.today').slideDown();
    $('.time__take, section.welcome, section.tariff').slideUp();
    $('.time__event').removeClass('time__event--active');
    $('.time__confirm')
        .removeClass('time__confirm--active')
        .removeClass('time__confirm--checked');

    $('.time__takeTo').text('..?.')
    
    bdRooms.child('events').get().then((snapshot) => {
        $('.time__item').remove();
        $('.time__event')
            .removeClass('time__eventPlus')
            .removeClass('time__eventMinus');

        if (snapshot.exists()) {
            baseEvents = snapshot.val();

            const year = date.getFullYear();
            const month = $(this).children('.date__month').text();
            const day = $(this).children('.date__num').text();

            if (baseEvents[year] 
                && baseEvents[year][month] 
                && baseEvents[year][month][day]) {
                const badTimeFrom = [13, 14, 15, 19, 20, 21];
                const timeFrom = +baseEvents[year][month][day].e1.timeFrom.split(':')[0];

                for (let i = timeFrom - 1; i >= 9; i--) {
                    $('.time__list').prepend($(`<li class="time__item">${i}:00</li>`));
                }

                if (badTimeFrom.includes(timeFrom) 
                    || (timeFrom === 16 && $(window).width() > 423)) {
                    $('.time__event').addClass('time__eventPlus');
                } else {
                    $('.time__event').addClass('time__eventMinus');
                }

                $('.time__eventFrom').text(`${timeFrom}:00`);
                $('.time__event').css('display', 'flex');

                const firstMiniEvent = $('.today__events .today__item:first-of-type');
const secondMiniEvent = $('.today__events .today__item:last-of-type');

$(firstMiniEvent).find('.today__info h4').text(baseEvents[year][month][day].e1.name);
$(firstMiniEvent).children('img').attr('src', `${baseEvents[year][month][day].e1.photo}`);
$(firstMiniEvent).find('.today__info > div > span:last-of-type')
    .text(baseEvents[year][month][day].e1.timeFrom);

if (baseEvents[year][month][day].e2) {
    $(secondMiniEvent).css('visibility', 'visible');

    $(secondMiniEvent).find('.today__info h4').text(baseEvents[year][month][day].e2.name);
    $(secondMiniEvent).children('img').attr('src', `${baseEvents[year][month][day].e2.photo}`);
    $(secondMiniEvent).find('.today__info > div > span:last-of-type')
        .text(baseEvents[year][month][day].e2.timeFrom);
} else {
    $(secondMiniEvent).css('visibility', 'hidden');
};
                
                $('.today__events').removeClass('today__events--empty');
                $('.today__events--heading').removeClass('today__events--heading--empty');
            } else {
                $('.time__event').css('display', 'none');

                $('.today__events').addClass('today__events--empty');
                $('.today__events--heading').addClass('today__events--heading--empty');

                for (let i = 9; i <= 24; i++) {
                    $('.time__list').append($(`<li class="time__item">${i}:00</li>`));
                }
            }
        }

        $('section.time').slideDown();

        let first;

let startTime;
let endTime;

$('.time__item').on('click', function (e) {
    $('section.welcome, section.tariff').slideUp();
    $('.time__take').slideDown().css('display', 'flex');
    $('.added').remove();
    $('.time__item').removeClass('time__item--active-last');
    $('.time__confirm')
        .removeClass('time__confirm--active')
        .removeClass('time__confirm--checked');

    $('.time__event').removeClass('time__event--active');

    $('.time__takeFrom').text($(this).text());
    $('.time__takeTo').text('..?.');

    $('.form__hourAt').val($(this).text());
    $('.form__hourFrom').val($(this).text());

    if (!$('.time__item').hasClass('time__item--active')) {  
        $(this).addClass('time__item--active');
        $(this).addClass('time__item--last');
        $(this).css('border-radius', '10px');
        first = $(this);
    } else if ($(this).hasClass('time__item--active') 
        && !$(this).next().hasClass('time__item--active') 
        && !$(this).prev().hasClass('time__item--active')) {
            $(this).removeClass('time__item--active');
            $(this).removeClass('time__item--last');
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
        $('.time__item').removeClass('time__item--last');
        $('.time__item').removeAttr('style');
        $('.time__item').removeClass('timeOut');
         
        if (start < end) {
            for (let i = start; i <= end; i++) {
                $(times[i]).addClass('time__item--active');
            }
             
            $(times[start]).css('border-radius', '10px 0 0 10px');
            $(times[end]).css('border-radius', '0 10px 10px 0').addClass('time__item--last');

            $('.form__hourAt').val($(times[start]).text());
            $('.form__hourFrom').val($(times[end]).text());

            $('.time__takeFrom').text($(times[start]).text());
            $('.time__takeTo').text(`${$(times[end]).text()})`);

            startTime = +$(times[start]).text().split(':')[0];
            endTime = +$(times[end]).text().split(':')[0];

            $('.time__confirm').addClass('time__confirm--active');
        } 

        if (start === end) {
            $(times[start])
                .addClass('time__item--active')
                .css('border-radius', '10px');

            $('.time__takeFrom').text($(times[start]).text());
            $('.time__takeTo').text('..?.');

            $('.time__confirm').removeClass('time__confirm--active');
        }
         
        if (start > end) {
            for (let i = end; i <= start; i++) {
                $(times[i]).addClass('time__item--active');
            }
             
            $(times[start]).css('border-radius', '0 10px 10px 0');
            start === end 
                ? $(times[end]).css('border-radius', '10px').addClass('time__item--last')
                : $(times[end]).css('border-radius', '10px 0 0 10px');

            
            $('.form__hourAt').val($(times[end]).text());
            $('.form__hourFrom').val($(times[start]).text());

            $('.time__takeFrom').text($(times[end]).text());
            $('.time__takeTo').text(`${$(times[start]).text()})`);

            startTime = +$(times[end]).text().split(':')[0];
            endTime = +$(times[start]).text().split(':')[0];
            
            $('.time__confirm').addClass('time__confirm--active');
        }
    }

    let timeItemActive = $('.time__item--active');

    $(timeItemActive).append($('<span class="added"></span>'));
    $(timeItemActive[timeItemActive.length - 1]).children('.added').remove();

    $('.time__count').text(timeItemActive.length);
});

$('.time__event').on('click', function() {
    let timeItem = $('.time__item');

    $('section.welcome, section.tariff').slideUp();

    $('.time__confirm')
        .removeClass('time__confirm--active')
        .removeClass('time__confirm--checked');

    $(timeItem)
        .removeClass('time__item--active')
        .removeClass('time__item--last');

    for (let i = 1; i < timeItem.length - 1; i++) {
        $(timeItem[i]).css('border-radius', '0');
    }

    $(this).addClass('time__event--active');

    let timeFrom = +$('.time__eventFrom').text().split(':')[0];
    let timeTo = +$('.time__eventTo').text().split(':')[0];

    $('.time__count').text(timeTo - timeFrom);
    $('.time__takeFrom').text(`${timeFrom}:00`);
    $('.time__takeTo').text(`${timeTo}:00)`);

    $('input.form__hourAt').val(`${timeFrom}:00`);
    $('input.form__hourFrom').val(`${timeTo}:00`);

    $('.time__take').slideDown().css('display', 'flex');

    $('.time__confirm').addClass('time__confirm--active');
});

$('.time__confirm').on('click', function() {
    $(this).addClass('time__confirm--checked');
    $('.welcome__item').remove();

    bdRooms.child('rooms').get().then((snapshot) => {
    Ready();

    $('.welcome__item').remove();

    if (snapshot.exists()) {
        baseRooms = snapshot.val();

        let freeRooms = [];

        for (const key in baseRooms) {
            for (let i = timeFrom; i <= timeTo; i++) {
                if (!baseRooms[key][year][month][day].freeTimes.includes(i + ':00')) {
                    break;
                }

                if (i === timeTo) {
                    freeRooms.push(baseRooms[key]);
                }
            }
        }

        for (const a of freeRooms) {
            const img = a.photo;
            const name = a.name;
            const text = a.cardText;
            const key = a.key;

            const roomItem = $('.welcome__item--none').clone();

            $(roomItem).find('.welcome__photo img').attr('src', img);
            $(roomItem).find('.welcome__title').text(name);
            $(roomItem).find('.welcome__paragraph').text(text);
            $(roomItem).find('.welcome__key').text(key);

            $(roomItem)
                .removeClass('welcome__item--none')
                .addClass('welcome__item');

            $('.welcome__list').append($(roomItem));
        }

        $('.form .welcome__advantages a').on('click', function(e) {
    e.preventDefault();

    $('.welcome__item').removeClass('welcome__item--active');

    $(this)
        .parent()
        .parent()
        .parent()
        .addClass('welcome__item--active');

    $('section.tariff').slideDown();

    $('input.form__heading').val(
        $(this)
            .parent()
            .parent()
            .parent()
            .find('.welcome__title').text()
    );

    key =  $(this)
        .parent()
        .parent()
        .parent()
        .find('.welcome__key').text();

    $('.tariff__button, .tariff__card').on('click', function () {
    $('.tariff__button').removeClass('tariff__button--active');
    $(this).addClass('tariff__button--active');   

    // let start = +$(this).attr('class').split(' ')[0] - 1;

    if ($(this).hasClass('1') || $(this).hasClass('tariff__card:nth-child(1)')) {
        $('.tariff__cards').slideDown();
        $('.tariff__button').removeClass('tariff__button--active');
        $('.tariff__button:nth-child(1)').addClass('tariff__button--active');  
        $('.tariff__cards').css({
            'display': 'flex',
            'right': '0px'
        });
        $('.tariff__card').removeClass('tariff__card--active');
        $('.tariff__card:nth-child(1)').addClass('tariff__card--active');

        $('.form__tariff').val($('.tariff__button:nth-child(1) p:first-of-type').text());
    }
 
    if ($(this).hasClass('2') || $(this).hasClass('tariff__card:nth-child(2)')) {
        $('.tariff__cards').slideDown();
        $('.tariff__button').removeClass('tariff__button--active');
        $('.tariff__button:nth-child(2)').addClass('tariff__button--active');  
        $('.tariff__cards').css({
            'display': 'flex',
            'right': '319px'
        });
        $('.tariff__card').removeClass('tariff__card--active');
        $('.tariff__card:nth-child(2)').addClass('tariff__card--active');

        $('.form__tariff').val($('.tariff__button:nth-child(2) p:first-of-type').text());
    }
 
    if ($(this).hasClass('3') || $(this).hasClass('tariff__card:nth-child(3)')) {
        $('.tariff__cards').slideDown();
        $('.tariff__button').removeClass('tariff__button--active');
        $('.tariff__button:nth-child(3)').addClass('tariff__button--active');  
        $('.tariff__cards').css({
            'display': 'flex',
            'right': '638px'
        });
        $('.tariff__card').removeClass('tariff__card--active');
        $('.tariff__card:nth-child(3)').addClass('tariff__card--active');
        
        $('.form__tariff').val($('.tariff__button:nth-child(3) p:first-of-type').text());
    }
 
    $('.tariff__submit').addClass('button--active');

    $('.tariff__submit').on('click', function(e) {
    e.preventDefault();
    Ready();
    
    const dbRef = firebase.database().ref();

    dbRef.child("rooms").get().then((snapshot) => {
    if (snapshot.exists()) {
        base = snapshot.val();
        
        let hours = base[key][year][month][day].freeTimes;

        const startDel = hours.indexOf(timeFrom + ':00');
        const countDel = timeTo - timeFrom + 1;

        hours.splice(startDel, countDel);
    
        firebase.database().ref(`rooms/${key}/${year}/${month}/${day}/freeTimes`).set(
            hours.length !== 0 ? hours : 'notFreeTime'
        );
    }
}).catch((error) => {
    console.error(error);
});;

    let base;

    dbRef.child("booking").get().then((snapshot) => {
        if (snapshot.exists()) {
            base = snapshot.val();
            
            if (base[year][month] 
                && base[year][month][day]) {
                let n = '';
                for (const key in base[year][month][day][room]) {
                    n = key;
                }
                bookingN = 'booking ' + (+n.split(' ')[1] + 1);
            } else {
                bookingN = 'booking ' + 1;
            }
        } else {
            bookingN = 'booking ' + 1;
        }
        
        firebase.database().ref(`booking/${year}/${month}/${day}/${room}/${bookingN}`).set({
            room,
            day,
            month,
            timeFrom: timeFrom + ':00',
            timeTo: timeTo + ':00',
            tariff
        });

        let link = 'https://api.whatsapp.com/send?phone=380638373845&text=';
        let textForLink = `Hi,%20I%20want%20to%20book%20${room}%20capsule%20in%20LR.%20${month}%20${day},%20from%20${timeFrom}:00%20to%20${timeTo}:00%20(${tariff}%20tariff).`;
        let reverseLink = `https://zarva6596.github.io/livingRoom/capsule-ticket.html?${key}=${month}=${day}=${timeFrom}=${timeTo}`;

        document.location.href = `${link}${textForLink}%20${reverseLink}`;
    }).catch((error) => {
        console.error(error);
    });
});
});;
});;
    }
}).catch((error) => {
    console.log(error);
});

    $('section.welcome').slideDown();
});;
    }).catch((error) => {
        console.log(error);
    })
});;

$(document).ready(function() {
    if ($('main').hasClass('capsule-ticket')) loadCapsuleTicket();
});

function loadCapsuleTicket() {
    let link = window.location.href.split('?')[1].split('=');

    const ticketKey = link[0];
    const ticketMonth = link[1];
    const ticketDay = link[2];
    const ticketFrom = link[3];
    const ticketTo = link[4];

    bdRooms.child('rooms').get().then((snapshot) => {
        if (snapshot.exists()) {
            baseRooms = snapshot.val();
    
            const placeName = baseRooms[ticketKey].name;
            const placePhoto = baseRooms[ticketKey].photo;

            $('.ticket .head__photo img').attr('src', placePhoto);
            $('.ticket__place span').text(placeName);
            $('.ticket__month').text(ticketMonth);
            $('.ticket__day').text(ticketDay);
            $('.ticket__timeFrom').text(ticketFrom + ':00 -');
            $('.ticket__timeTo').text(ticketTo + ':00');

            const ticketButton = `https://wa.me/?text=Hi,%20I%20invite%20you%20to%20the%20meeting.%20Click%20here%20to%20open%20the%20ticket%20-->%20${window.location.href}`;

            $('.ticket__info a').attr('href', ticketButton);

            $('.preloader').css({
                'visibility': 'hidden',
                'opacity': '0'
            });
        }
    }).catch((error) => {
        console.log(error);
    });
}
