$(document).ready(function () {

    // PREPARE ELEMENTS FOR ANIMATION
    function prepareForAnimation(selector, offset = 30) {
        $(selector).css({ opacity: 0, position: 'relative', top: `${offset}px` });
    }

    // ANIMATION: FADE IN AND MOVE UP
    function animateElement(element, duration = 600) {
        $(element).animate({ opacity: 1, top: 0 }, duration);
    }

    // ANIMATION: FADE IN ON SCROLL
    function animateOnScroll(selector, offsetTrigger = 50, duration = 600) {
        $(selector).each(function () {
        const elementTop = $(this).offset().top;
        const scrollBottom = $(window).scrollTop() + $(window).height();

        if (scrollBottom > elementTop + offsetTrigger && $(this).css('opacity') == 0) {
            animateElement(this, duration);
        }
        });
    }

    // LOAD ANIMATION
    prepareForAnimation('.card');
    prepareForAnimation('#cta');

    // LAUNCH ANIMATION ON SCROLL
    $(window).on('scroll', function () {
        animateOnScroll('.card');
        animateOnScroll('#cta');
    });

    // INITIAL ANIMATION
    animateOnScroll('.card');
    animateOnScroll('#cta');
});
