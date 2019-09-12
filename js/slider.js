(function($) {
    $(document).ready(function() {
        console.log("slider");
        /*slider*/
        /* Слайдшоу */

        $('body .owl-carousel.slideshow').owlCarousel({
            items: 1,
            loop: true
                /*,

                            autoplay: true,
                            autoplayTimeout: 2000,
                            autoplayHoverPause: true*/
        });
        $('body .slide_clinics').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,

            nav: true,
            navText: ['<svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.3322 20L13.25 18.1748L4.59929 10L13.25 1.82519L11.3322 -2.69677e-07L0.75 10L11.3322 20Z" fill="#3085EA"/> </svg>',
                '<svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M2.66785 20L0.75 18.1748L9.40071 10L0.75 1.82519L2.66785 -2.69677e-07L13.25 10L2.66785 20Z" fill="#3085EA"/> </svg>'
            ],

            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                }
            }
        });



    });
})(jQuery);