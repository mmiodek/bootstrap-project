
$(document).ready(function(){
  var pathname = window.location.pathname;
  var currentPage = pathname.split("/").pop();
  $('.nav a[href="'+currentPage+'"]').parent().addClass("active");
});