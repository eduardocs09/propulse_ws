$(document).ready(function(){

  $(window).scroll(function () {
        if ($(window).scrollTop() > 500) {
            $("#navigation").css("background-color","black");
        } else {
            $("#navigation").css("background-color", "transparent");
        }
    });

  $('.carousel').carousel({
    interval: 5000
  })

});
