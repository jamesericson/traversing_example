console.log("test");

$(document).ready(function(){

$(".clickThisButton").on('click', function(){ // click triggers the funtion
  console.log("it works! clicked (sorry no toggling--must refresh)");
// bellow: by using "this", only the button that you clicked is made yellow
  $(this).css('background-color', 'yellow');
// bellow: by selecting the "parent" of "this", now the line, the "li", that the button was on is made purple
  $(this).parent().css('color', 'purple');
// bellow: by selecting the "siblings" of the "parent" of "this", now we are affecting the "li" of the "ul" but not the "li" of "this" button
  $(this).parent().siblings().animate({opacity:.3});
// bellow: by going up 3 parents we went from "button" to "ls" to "ul" to "body" from here now we can "find" the "h1" and affect it
  $(this).parent().parent().parent().find('h1').css('background-color', '#eeeeaa');
});

});
