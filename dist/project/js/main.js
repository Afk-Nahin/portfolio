$(window).scroll(function(){
   parallax();
   });

   function parallax(){
      var wScroll = $(window).scrollTop();
      $('.head').css('background-position', 'center ' +((wScroll-5)*-0.3)+'px');


      $('.parallax_need').css('margin-top', (wScroll*0.2)+'px');

      $('.feature').css('background-position', 'center ' +((wScroll-500)*-0.3)+'px');
      $('.counting_bg').css('background-position', 'center ' +((wScroll-2500)*-0.36)+'px');

     
    };



