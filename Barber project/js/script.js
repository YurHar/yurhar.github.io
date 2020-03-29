$(document).ready(function () {


// Get the modal
    var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    $('.m-bar').on('click', function () {

        $(".head-menu").toggle('fast');

    });

    window.onresize = function () {

        if (window.innerWidth > 480) {
            $('.head-menu').css("display", 'inline-flex');
        } else {
            $('.head-menu').css("display", 'none');
        }

    }

    // Declare Carousel jquery object
    var owl = $('.owl-carousel');

    owl.owlCarousel({
        items: 1,
        margin: 0,
        padding: 0,
        center: true,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,

    });


    function validateEmail(email) {
        var re = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        return re.test(email);
    }

    $(".approve").on("click", function () {
        var result = $(".mail-val");
        var email = $(".inpt").val();
        result.text("");

        if (validateEmail(email)) {
            result.text("This email is valid");
            result.css("color", "green");
        } else if(email === ""){
            result.text("Fill in the field");
            result.css("color", "red");
        } else {
            result.text("Enter valid email");
            result.css("color", "red");
        }

        $('.inpt').val("");

        result.show();

        setTimeout(function () {

            result.hide();

        },3000);

        return false;

    });


    // $('.scr-shop').on('click',function () {
    //
    //     setInterval(function () {
    //
    //         $(document).scrollY;
    //
    //     },3000)
    //
    // });
    //
    //
    //
    // $(document).on('scroll', function () {
    //
    //     console.log($(this).scrollTop());
    //
    // })


    // $(document).click(function () {
    //     $('.head-menu').hide();
    // });


});