
$(document).ready(function(){
var pathname = window.location.pathname;
var currentPage = pathname.split("/").pop();
$('.nav>li>a').filter("[href=currentPage]").addClass("active");
});