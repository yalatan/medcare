(function($) {
    $(document).ready(function() {
        $('body').on('click', '#info_form_text', function() {

            document.getElementById("addTextarea").style.display = 'block';
            document.getElementsByClassName("form_wrap_addinfo")[0].classList.add("open");
        });

    });
})(jQuery);