(function($) {
    $(document).ready(function() {
        $('body').on('click', '#info_form_text', function() {

            document.getElementById("addTextarea").style.display = 'block';
            document.getElementsByClassName("form_wrap_addinfo")[0].classList.add("open");
        });
        $('body').on('change', '.country_form select', function() {

            $('.country_form select').css({ color: "#4C6481" });
        });
        $('body').on('change', '.service_form select', function() {

            $('.service_form select').css({ color: "#4C6481" });
        });
        $('body').on('change', '#file', function() {
            let filesArr = [];
            /* filesArr.push($(this).val());*/
            let d = document.getElementById("file").files[0].name;

            filesArr.push(d);
            console.log(files);
            filesArr.forEach(function(item) {
                    $('body #files').append("<p>" + item + "</p>")
                }

            );
        });


    });
})(jQuery);