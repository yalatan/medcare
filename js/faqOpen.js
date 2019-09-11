(function($) {
    $(document).ready(function() {
        $('body').on('click', '.faq_section_div', function() {


            if ($(this).find("svg").hasClass("rotate180")) {
                $(this).find("svg").toggleClass("rotate180");
                $(this).next(".faq_section_div_text").fadeOut(300);
            } else {
                $(this).find("svg").toggleClass("rotate180");
                $(this).next(".faq_section_div_text").fadeIn(300);

            }

        });

    });
})(jQuery);