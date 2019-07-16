"use strict"

$(document).ready(function () {



    $('.nav-item').on('click', function () {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });


    var image = document.getElementsByClassName('thumbnail');
    new simpleParallax(image, {
        scale: 1.5
    });


    $(document).on("scroll", function f() {

        var docScr = $(this).scrollTop();


        if (docScr <= 520) {
            $(".nav-item").removeClass("active");
            $("a[href='#home']").parent().addClass("active");
            $('header').removeClass("on_scroll");

        }

        if(docScr >= 520){
            $(".nav-item").removeClass("active");
            $("a[href='#about']").parent().addClass("active");
            $('header').addClass("on_scroll");
        }

        if(docScr >= 1200){
            $(".nav-item").removeClass("active");
            $("a[href='#tours']").parent().addClass("active");
            $('header').addClass("on_scroll");
        }

        if(docScr >= 1840){
            $(".nav-item").removeClass("active");
            $("a[href='#contact']").parent().addClass("active");
            $('header').addClass("on_scroll");
        }

    });




    // ******Show Scroll To Top Button*****

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    //Click event to scroll to top
    $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},2000);
        return false;
    });



//    *******Click to play******//

    $(".scrollToTop").on("click", function () {

        var audio = $("#audio")[0];
        audio.play();

    });












});


