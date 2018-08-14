(function($) {
    "use strict";

    // ______________ SUPERFISH
    jQuery('#navigation').superfish({
        speed: 1,
        animation: false,
        animationOut: false
    });

    // ______________ MOBILE MENU

    $(function() {
        $('#navigation').slicknav({
            label: "MENU",
            closedSymbol: "&#8594;",
            openedSymbol: "&#8595;"
        });
    });

    // ______________ HOME PAGE WORDS ROTATOR
    $("#js-rotating").Morphext({
        animation: "bounceInLeft",
        separator: ",",
        speed: 6000
    });
    $('#js-rotating').show();



    // ______________ ANIMATE EFFECTS
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false
    });
    wow.init();

    // ______________ DISCOUNT NUMBER - CALL TO ACTION ON HOME PAGE
    jQuery(document).ready(function() {
        $('.calltoactioninfo').waypoint(function() {

            $('#discount')
                .prop('number', 0)
                .animateNumber({
                        number: 45
                    },
                    3000
                );

        }, {
            offset: 800,
            triggerOnce: true
        });
    });

    // ______________ LOVED BY DEVELOPERS NUMBER - CALL TO ACTION ON HOME PAGE
    jQuery(document).ready(function() {
        $('.testimonials .circle').waypoint(function() {

            $('#lovedby')
                .prop('number', 0)
                .animateNumber({
                        number: 41169
                    },
                    3500
                );

        }, {
            offset: 800,
            triggerOnce: true
        });
    });

    // TESTIMONIALS CAROUSEL_________________________ //

    $(document).ready(function() {
        $("#testimonials-carousel").owlCarousel({
            items: 1,
            autoPlay: 7500,
            transitionStyle: "backSlide",
            itemsDesktop: [1199, 1],
            itemsDesktopSmall: [979, 1],
            itemsTablet: [768, 1]
        });
    });

    // BLOG SLIDER_________________________ //

    $(document).ready(function() {
        $("#blogslider").owlCarousel({
            navigation: false,
            slideSpeed: 300,
            paginationSpeed: 400,
            singleItem: true
        });
    });

    // HOME PAGE SLIDER_________________________ //
    var slideFinished = false;
    $(document).ready(function() {
        $("#home-slider").owlCarousel({
            navigation: false,
            pagination: true,
            autoPlay: 8000,
            slideSpeed: 500,
            paginationSpeed: 400,
            singleItem: true,
            loop: false,
            stopOnHover: true,
            afterMove: function() {
                if (this.currentItem === 2) {
                    slideFinished = true;
                }
                if ((this.currentItem === 0) && slideFinished) {
                    this.stop();
                    $('#home-slider').off('mouseout'); // stop resume on hover exit
                }
            },
        });
    });


    // SMOOTH SCROLL________________________//

    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length && ($(document).scrollTop() !== target.offset().top)) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 80
                    }, 1000);
                    return false;
                }
            }
        });
    });

    // Move to anchor on page load
    $(function() {
        var hash = window.location.hash;
        if (hash) {
            // these gave different offset values for some reason
            if (['#e2e', '#zephyr'].indexOf(hash) !== -1) {
                hash = '#linux';
            }
            var target = $(hash + 'Anchor');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 90
                }, 600);
            }
        }
    });

    // ______________ BACK TO TOP BUTTON

    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('#back-to-top').fadeIn('slow');
        } else {
            $('#back-to-top').fadeOut('slow');
        }
    });
    $('#back-to-top').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });


    $(document).foundation();

})(jQuery);
