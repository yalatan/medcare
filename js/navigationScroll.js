(function($) {
    $(document).ready(function() {

        function lpHeader() {
            if ($(window).width() > 758) {
                console.log($(window).width());
                if ($(window).scrollTop() == 0) {
                    console.log($(window).scrollTop());
                    $("body .containerwidth100vw").css({ 'backgroundColor': 'transparent;' });
                    $("body .header .header_logo").css({ 'padding': '0' }).height("auto").css("marginTop", 20);
                    $("body .header_navigation .wrap_contacts").show();
                    $("#menu_open_wrapper").offset({ top: $(".header_wrapper").height() + $(window).scrollTop() });
                    $("#search_open_wrapper").offset({ top: $(".header_wrapper").height() + $(window).scrollTop() });
                    $("body .menu .button_blue").hide();
                } else { // Иначе
                    console.log($(window).scrollTop());
                    $("body .containerwidth100vw").css({ 'backgroundColor': '#ffffff' }).height(60);
                    $("#menu_open_wrapper").offset({ top: $(".header_wrapper").height() + $(window).scrollTop() });
                    $("#search_open_wrapper").offset({ top: $(".header_wrapper").height() + $(window).scrollTop() });
                    $("body .header .header_logo").css({ 'padding': '5px 0;' }).height(50).css("marginTop", 0);
                    $("body .header_navigation .wrap_contacts").hide();

                    $("body .menu .button_blue").show();

                }



            };
        };
        $(window).on('load scroll', lpHeader);



    });
})(jQuery);