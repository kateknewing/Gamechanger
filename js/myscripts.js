

$(document).ready(function(){
  $("[rel='tooltip']").tooltip();    
 
    $('.thumbnail').hover(
        function(){
            $(this).find('.caption').slideDown(350); //.fadeIn(250)
        },
        function(){
            $(this).find('.caption').slideUp(350); //.fadeOut(205)
        }
    );  

  
});


