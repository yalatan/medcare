(function($) {
    $(document).ready(function() {
        $('body').on('click', '#button_up', function() {


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

    });
})(jQuery);