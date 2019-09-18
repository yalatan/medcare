(function($) {
    $(document).ready(function() {
        $('body').on('click', '#button_up', function() {


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
        $('body').on('click', '.flowing-scroll', function(event) {
            event.preventDefault();
            console.log("scroll");
            var el = $(this);
            var dest = el.attr('href'); // получаем направление
            console.log(dest);
            if (dest !== undefined && dest !== '') { // проверяем существование
                $('html').animate({
                        scrollTop: $(dest).offset().top - 100 // прокручиваем страницу к требуемому элементу
                    }, 1000 // скорость прокрутки
                );
            }
            return false;
        });

    });
})(jQuery);