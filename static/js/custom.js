$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('.navbar').addClass('scrolled');
    } else {
        $('.navbar').removeClass('scrolled');
    }
});
$(document).ready(function(){
    $('#carouselExampleIndicators').carousel({
      interval: 2000 
    });
  });