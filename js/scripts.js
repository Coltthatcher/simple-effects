$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle().fadeIn(5000);
    $("#walrus-hidden").toggle().fadeOut(5000);
  });
});


