
$( document ).ready(function() {
    $(window).on("scroll", function() {
        $("nav").toggleClass("shrink", $(this).scrollTop() > 50)
    });
});