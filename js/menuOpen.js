(function($) {
    $(document).ready(function() {
        console.log("rtyui");

        function menu_close() {
            $("#menu_button_open").fadeIn(800).css("display", "flex");
            $("#menu_button_close").fadeOut(800);
            $("#menu_open_wrapper").fadeOut(800);
        };

        function menu_open() {
            console.log($(".header_wrapper").height());
            $("#menu_button_close").fadeIn(800).css("display", "flex");
            $("#menu_open_wrapper").fadeIn(800).offset({ top: $(".header_wrapper").height() + $(window).scrollTop() });
            $("#menu_button_open").fadeOut(800);
        };

        function search_close() {
            $("#search_button_open").fadeIn(800).css("display", "flex");
            $("#search_button_close").fadeOut(800);
            $("#search_open_wrapper").fadeOut(800);
        };

        function search_open() {
            $("#search_button_close").fadeIn(800).css("display", "flex");
            $("#search_open_wrapper").fadeIn(800).offset({ top: $(".header_wrapper").height() + $(window).scrollTop() });
            $("#search_open_wrapper").fadeIn(800);
            $("#search_button_open").fadeOut(800);
        };



        /**menu open */
        $('body').on('click', '#menu_button_open ', function() {
            menu_open();
            search_close();
        });
        /*menu close*/
        $('body').on('click', '#menu_button_close', function() {
            menu_close();
        });

        /**search open */
        $('body').on('click', '#search_button_open', function() {
            search_open();
            menu_close();
        });
        /*search close*/
        $('body').on('click', '#search_button_close', function() {
            search_close();
        });


    });
})(jQuery);