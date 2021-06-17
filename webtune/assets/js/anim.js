console.clear();

select = e => document.querySelector(e);
selectAll = e => document.querySelectorAll(e);

const stage = select('.stage');
const animationSections = selectAll(".animation-section");
const links = selectAll(".slide__scroll-link");
const titles = selectAll('.col__content-title');
//const introTitle = new SplitText('.intro__title', {type: "lines", linesClass: "intro-line"});
/*const splitTitles = new SplitText(titles, {
    type: "lines, chars",
    linesClass: "line",
    charsClass: "char",
    position: "relative"
});*/
let slideID = 0;


function initSlides() {

    // Animation of each slide scrolling into view

    animationSections.forEach((animationSection, i) => {

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: animationSection,
                start: "40% 50%", // position of trigger meets the scroller position
            }
        });

        tl.from(animationSection.querySelectorAll('.js-title'), {
            ease: "power4",

            duration: 2.5,
        })
            .from(animationSection.querySelectorAll('.line__inner'), {
                y: 200,
                duration: 2,
                ease: "power4",
                stagger: 0.1
            }, 0)
            .from(animationSection.querySelectorAll('.js-txt'), {
                x: 0,
                y: 0,
                opacity:1,
                duration: 2,
                ease: "power4"
            }, 0.4)
            .from(animationSection.querySelectorAll('.slide-link'), {
                x: -100,
                y: 100,
                opacity: 0,
                duration: 2,
                ease: "power4"
            }, 0.3)
            .from(animationSection.querySelectorAll('.slide__scroll-link'), {
                y: 200,
                duration: 3,
                ease: "power4"
            }, 0.4)
            .to(animationSection.querySelectorAll('.slide__scroll-line'), {
                scaleY: 0.6,
                transformOrigin: "bottom left",
                duration: 2.5,
                ease: "elastic(1,0.5)"
            }, 1.4)
    });

    // External footer link scroll animation

    gsap.from('.footer__link', {
        scrollTrigger: {
            trigger: '.footer',
            scrub: 2,
            start: "50% 100%", // position of trigger meets the scroller position
            end: "0% 0%",
        },
        y: "20vh",
        ease: 'sine'
    })
}

function initParallax() {

    slides.forEach((slide, i) => {
        let imageWrappers = slide.querySelectorAll('.col__image-wrap');

        gsap.fromTo(imageWrappers, {
            y: "-30vh"
        }, {
            y: "30vh",
            scrollTrigger: {
                trigger: slide,
                scrub: true,
                start: "top bottom", // position of trigger meets the scroller position
                snap: {
                    snapTo: 0.5, // 0.5 'cause the scroll animation range is 200vh for parallax effect
                    duration: 1,
                    ease: 'power4.inOut'
                }
            },
            ease: 'none'
        })
    });
}

function scrollTop() {
    gsap.to(window, {
        duration: 2,
        scrollTo: {
            y: "#slide-0"
        },
        ease: "power2.inOut"
    });
    gsap.to('.footer__link-top-line', {
        scaleY: 1,
        transformOrigin: "bottom center",
        duration: 0.6,
        ease: "power4"
    });
}

function initKeys() {
    document.addEventListener('keydown', (e) => {
        e.preventDefault();
        if (event.keyCode == 40) { //down arrow to next slide
            if (slideID <= slides.length) {
                slideID++;
                gsap.to(window, {
                    duration: 2,
                    scrollTo: {
                        y: "#slide-" + slideID
                    },
                    ease: "power2.inOut"
                });
            }
        } else if (event.keyCode == 38) { // up arrow to top
            slideID = 0;
            scrollTop();
        }
    });
}

function init() {
    gsap.set(stage, {autoAlpha: 1});
    //  initHeader();
    //  initIntro();
    //  initLinks();
    initSlides();
    // initParallax();
    // initKeys();
}

window.onload = () => {
    init();
};

