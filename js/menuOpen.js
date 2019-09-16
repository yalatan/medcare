(function($) {
    $(document).ready(function() {

        function menu_close() {
            $("#menu_button_open").fadeIn(800).css("display", "flex");
            $("#menu_button_close").fadeOut(500);
            $("#menu_open_wrapper").fadeOut(500);

        };

        function menu_open() {
            $("#menu_button_close").fadeIn(800).css("display", "flex");
            $("#menu_open_wrapper").fadeIn(800).offset({ top: $(".header_wrapper").height() - 1 });
            $("#menu_button_open").fadeOut(500);


        };

        function search_close() {
            $("#search_button_open").fadeIn(800).css("display", "flex");
            $("#search_button_close").fadeOut(500);
            $("#search_open_wrapper").fadeOut(500);

        };

        function search_open() {
            $("#search_button_close").fadeIn(800).css("display", "flex");
            $("#search_open_wrapper").fadeIn(800).offset({ top: $(".header_wrapper").height() - 1 });
            $("#search_open_wrapper").fadeIn(800);
            $("#search_button_open").fadeOut(500);

        };

        function scrollTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        };


        /**menu open */
        $('body').on('click', '#menu_button_open ', function() {
            scrollTop();
            menu_open();
            search_close();
            $(".black_color").fadeIn(100);
        });
        /*menu close*/
        $('body').on('click', '#menu_button_close', function() {
            menu_close();
            $(".black_color").fadeOut(100);
        });

        /**search open */
        $('body').on('click', '#search_button_open', function() {
            scrollTop();
            search_open();
            menu_close();
            $(".black_color").fadeIn(100);
        });
        /*search close*/
        $('body').on('click', '#search_button_close', function() {
            search_close();
            $(".black_color").fadeOut(100);
        });


    });
})(jQuery);