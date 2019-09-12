(function($) {
    $(document).ready(function() {
        $('body').on('click', '#button_up', function() {


            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
        $('body').on('click', '.flowing-scroll', function() {
            var el = $(this);
            var dest = el.attr('href'); // получаем направление
            if (dest !== undefined && dest !== '') { // проверяем существование
                $('html').animate({
                        scrollTop: $(dest).offset().top - 200 // прокручиваем страницу к требуемому элементу
                    }, 1000 // скорость прокрутки
                );
            }
            return false;
        });
    });
})(jQuery);


document.addEventListener("DOMContentLoaded", ready);

function ready() {

    /**SCROLL */
    /*   window.smoothScroll = function(target) {
               var scrollContainer = target;
               do { //find scroll container
                   scrollContainer = scrollContainer.parentNode;
                   if (!scrollContainer) return;
                   scrollContainer.scrollTop += 1;
               } while (scrollContainer.scrollTop == 0);

               var targetY = 0;
               do { //find the top of target relatively to the container
                   if (target == scrollContainer) break;
                   targetY += target.offsetTop;
               } while (target = target.offsetParent);

               scroll = function(c, a, b, i) {
                       i++;
                       if (i > 30) return;
                       c.scrollTop = a + (b - a) / 30 * i;
                       setTimeout(function() { scroll(c, a, b, i); }, 20);
                   }
                   // start scrolling
               scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
           }*/
    /**MAP */
    /*   var myMap;
    ymaps.ready(init); // Ожидание загрузки API с сервера Яндекса
    function init() {
        var lpMapOptions1 = {
            center: [53.938623, 27.600566],
            zoom: 16,
            controls: ['fullscreenControl', 'zoomControl']
        };
        var lpPlacemark1 = new ymaps.Placemark(lpMapOptions1.center, {
            hintContent: 'ИТСПРО',
            balloonContentHeader: 'ИТСПРО',
            balloonContentBody: 'IT компания. Основное направление деятельности нашей компании – системная интеграция',
            balloonContentFooter: 'Минск, ул.Мележа, 25'
        });
        myMap = new ymaps.Map("map", lpMapOptions1);
        myMap.geoObjects.add(lpPlacemark1);
    }
*/





    /*contacts open*/
    /*  let navigation = document.getElementsByClassName("header_navigation_page_span");
    let sections = document.getElementsByTagName("section");
    for (let i = 0; i < navigation.length; i++) {
        navigation[i].onclick = function(e) {
            console.log(i)
            if (i == "1") {
                navigation[0].classList.remove("bold_text");
                navigation[1].classList.add("bold_text");
                console.log("yes")
                for (let q = 0; q < sections.length; q++) {
                    sections[q].style.display = 'none';

                }
                document.getElementsByClassName("first_section")[0].style.display = 'none';
                document.getElementsByClassName("contacts_section")[0].style.display = 'block';
                document.getElementsByClassName("how_works_section")[0].style.display = 'block';
                document.getElementsByClassName("form_section")[0].style.display = 'block';
            }
            if (i == "0") {
                navigation[1].classList.remove("bold_text");
                navigation[0].classList.add("bold_text");
                console.log("0")
                for (let q = 0; q < sections.length; q++) {
                    sections[q].style.display = 'block';
                }
                document.getElementsByClassName("first_section")[0].style.display = 'block';
                document.getElementsByClassName("contacts_section")[0].style.display = 'none';
            }
        }
    };
*/


    /*slider banner top*/

    /* let arrSlidesBanner = document.getElementsByClassName("first_section_slide");
     let numberSlidesBanner = document.getElementsByClassName("first_section_pages_circle");
     for (let i = 0; i < arrSlidesBanner.length; i++) {
         arrSlidesBanner[i].style.display = "none";
     }
     arrSlidesBanner[0].style.display = "block";

     for (let i = 0; i < arrSlidesBanner.length; i++) {
         numberSlidesBanner[i].onclick = function(e) {
             for (let q = 0; q < arrSlidesBanner.length; q++) {
                 arrSlidesBanner[q].style.display = "none";
                 numberSlidesBanner[q].classList.remove("fill_circle");
             };
             arrSlidesBanner[i].style.display = "block";
             numberSlidesBanner[i].classList.add("fill_circle");
         };
     };*/



};