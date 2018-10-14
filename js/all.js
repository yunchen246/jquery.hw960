$(document).ready(function() {

 $('#gototop a').click(function(event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 1000);
 });


 $('.showmenu').on('click', function(event) {
   event.preventDefault();
   /* Act on the event */
   $('body').toggleClass('menu-show');
 });

});


//slider
//$(function(){
    //var point = $(window).height();
   // var point1 = 3263;
//    $("#slider").click(function(){
//        jQuery("html,body").animate({
//            scrollTop:0
//        },0);//銝羓宏��閧𧞄�笔漲//800
//      return false;
//    });
 ////   $(window).scroll(function() {
        //onsole.log( $(this).scrollTop());
       // if ( $(this).scrollTop() > point1){
         //   $('#gototop').fadeIn("slow");
       // } else {
          //  $('#gototop').stop().fadeOut("slow");
        //}
    //});
//});

