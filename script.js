console.log("test");

$(document).ready(function(){

$(".clickThisButton").on('click', function(){
  console.log("it works! clicked (sorry no toggling--must refresh)");
  $(this).css('background-color', 'yellow');
  $(this).parent().css('color', 'purple');
  $(this).parent().siblings().animate({opacity:.3});
  $(this).parent().parent().parent().find('h1').css('background-color', '#eeeeaa');
});

});
