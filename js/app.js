$("nav").hide();
$(window).scroll(function(){
      if($(window).scrollTop()>470){
         $("nav").fadeIn();
      }else{
         $("nav").fadeOut();
      }

});
