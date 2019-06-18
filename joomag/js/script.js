$(document).ready(function () {

    $('.email-input-button').on('click',function (e) {
        e.preventDefault();

        var regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
       if (regExpEmail.test($(this).parent().parent().find('input').val()))
       {
           $(this).parent().parent().find('.result-message').text('').text("Thank's for your choice").css('color','#43ec43');
           $('input').val('');
           setTimeout(function () {
              $('.result-message').text('');
          },3000);

       }else{

           $(this).parent().parent().find('.result-message').text('').text("Please write valid email").css('color','red');
           $('input').val('');
           setTimeout(function () {
               $('.result-message').text('')
           },3000);


       }



    });

});

(function () {
 window.onresize = changeLogo;
 window.onload = changeLogo;
 function changeLogo() {
     if(window.innerWidth <= 480){
         $('#joomagLogo').attr('src','files/joomag-love-wework-mobile.svg');
     }else{
         if($('#joomagLogo').attr('src')!=='files/joomag-love-wework.svg')
         {
             $('#joomagLogo').attr('src','files/joomag-love-wework.svg');

         }
     }
 }
})();