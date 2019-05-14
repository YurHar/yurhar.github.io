$(document).ready(function () {

    $('.nav-item').on('click', function () {
        $('.nav-item .active_menu').removeClass('active_menu');
        $(this).addClass('active_menu');
    });


    //**********Input Important Email***************

    $('#form_email').on("submit", function () {

        $(".error").hide();
        var hasError = false;
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailblockReg = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

        var emailaddressVal = $("#UserEmail").val();
        if (emailaddressVal == '') {
            $("#form_email").prepend('<div class="error" style="color: red">Please enter your email address.</div>');
            hasError = true;
        } else if (!emailReg.test(emailaddressVal)) {
            $("#form_email").prepend('<div class="error" style="color: red">Enter a valid email address.</div>');
            hasError = true;
        } else if (emailblockReg.test(emailaddressVal)) {
            $("#form_email").prepend('<div class="error" style="color: lightseagreen">Thank You</div>');
            hasError = true
        }

        if (hasError == true) {
            setInterval(function () {
                $('#form_email').find('div.error').remove();

            }, 4000);
            return false;
        }


    });


    //**********Menu Change**********

    var t = true;
    $(document).on("scroll", function () {

        var docScr = $(this).scrollTop();

        if (docScr <= 540) {
            $(".nav-item").removeClass("active_menu");
            $("a[href='#home']").parent().addClass("active_menu");
            $('header').removeClass("on_scroll");

        }
        if (docScr > 540) {
            $(".nav-item").removeClass("active_menu");
            $("a[href='#about']").parent().addClass("active_menu");
            $('header').addClass("on_scroll");

        }
        if (docScr > 1050) {
            $(".nav-item").removeClass("active_menu");
            $("a[href='#features']").parent().addClass('active_menu');
            $('header').addClass("on_scroll");
        }
        if (docScr > 2270) {

            if (t) {
                $('.count').each(function () {
                    $(this).prop('Counter', 0).animate({
                        Counter: $(this).text()
                    }, {
                        duration: 3000,
                        easing: 'swing',
                        step: function (now) {
                            if ($(this).hasClass('customer-satisfaction')) {
                                $(this).text(Math.ceil(now));
                            } else {
                                $(this).text(Math.ceil(now));
                            }
                        }
                    });
                });
                t = false;//Only do scroll function once
            }

            $(".nav-item").removeClass("active_menu");
            $("a[href='#screenshot']").parent().addClass("active_menu");
            $('header').addClass("on_scroll");
        }

        if (docScr > 2980) {
            $(".nav-item").removeClass("active_menu");
            $("a[href='#pricing']").parent().addClass("active_menu");
            $('header').addClass("on_scroll");
        }

        if (docScr > 3800) {
            $(".nav-item").removeClass("active_menu");
            $("a[href='#testimonials']").parent().addClass("active_menu");
            $('header').addClass("on_scroll");
        }

        if (docScr > 4150) {
            $(".nav-item").removeClass("active_menu");
            $("a[href='#team']").parent().addClass("active_menu");
            $('header').addClass("on_scroll");
        }

        if(docScr > 4587) {
            $(".nav-item").removeClass("active_menu");
            $("a[href='#contact']").parent().addClass("active_menu");
            $('header').addClass("on_scroll");
        }

    });

    $(function () {
        $('.btn_one').click(function () {
            $('#screen').hasClass('open') ? $('#screen').removeClass('open') : $('screen').addClass('open')
        })


    })


//************Scroll to Top*********
    $('#scrollUp').click(function () {
        $("html, body").animate({scrollTop: 0}, 2000);
        return false;
    });

    $("#scrollUp").on("click", function () {
        var audio = $("#audio")[0];
        audio.play();
    });


//************Img Carousel***************

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,
        loop: true,
        center: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: true
            }
        }
    });

//    *********************Pricing Sec*****************


//    *************Testimonials Sec********************
    $('.all_test').slick({
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true
    });


//***********Particles*************


    particlesJS("particles-js", {
        "particles": {
            "number": {"value": 150, "density": {"enable": true, "value_area": 800}},
            "color": {"value": "#ffffff"},
            "shape": {
                "type": "circle",
                "stroke": {"width": 0, "color": "#000000"},
                "polygon": {"nb_sides": 5},
                "image": {"src": "img/github.svg", "width": 100, "height": 100}
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {"enable": false, "speed": 1, "opacity_min": 0.1, "sync": false}
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {"enable": false, "speed": 30, "size_min": 0.1, "sync": false}
            },
            "line_linked": {"enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1},
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {"enable": false, "rotateX": 600, "rotateY": 1200}
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {"enable": true, "mode": "repulse"},
                "onclick": {"enable": true, "mode": "push"},
                "resize": true
            },
            "modes": {
                "grab": {"distance": 400, "line_linked": {"opacity": 1}},
                "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3},
                "repulse": {"distance": 200, "duration": 0.4},
                "push": {"particles_nb": 4},
                "remove": {"particles_nb": 2}
            }
        },
        "retina_detect": true
    });



    $('footer').footerReveal({ shadow: false, zIndex: -101 });



});

// let arr = [1,8,15,47,95,26,14,32];
//
// function reverseArray(arr) {
//     let newArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArray.push(arr[i]);
//     }
//     return newArray;
// }
//
// console.log(reverseArray(arr));


let arr = [1, 8, 15, 47, 95, 26, 14, 32];
arr.sort(function (a, b) {
    return a - b
});


