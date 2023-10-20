function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);


  
function jqUpdateSize(){
  // Get the dimensions of the viewport
  // var width = $(window).width();
  var height = $(window).height();

  // $('#jqWidth').html(width);
  $('#jqHeight').html(height);

  $('.header-container').css({ 
  height:  $(window).height(),
  overflow:" hidden"});

}
$(document).ready(jqUpdateSize);    // When the page first loads
$(window).resize(jqUpdateSize);     // When the browser changes size