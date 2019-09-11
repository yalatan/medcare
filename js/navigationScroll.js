(function($) {
    $(document).ready(function() {

        function lpHeader() {

            if ($(window).scrollTop() == 0) {
                $("body .containerwidth100vw").css({ 'backgroundColor': 'transparent;' }).height(60);
                $("body .header .header_logo").css({ 'padding': '0' }).height("auto").css("marginTop", 20);
                $("body .header_navigation .wrap_contacts").show();

                $("body .menu .button_blue").hide();
            } else { // Иначе
                $("body .containerwidth100vw").css({ 'backgroundColor': '#ffffff' });
                console.log($("body .header .header_logo"));
                $("body .header .header_logo").css({ 'padding': '5px 0;' }).height(50).css("marginTop", 0);
                $("body .header_navigation .wrap_contacts").hide();

                $("body .menu .button_blue").show();

            }

        };
        $(window).on('load scroll', lpHeader);



    });
})(jQuery);