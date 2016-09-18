$(document).ready(function () {

    //Gaussian blur
    $(window).on('scroll', gaussian);

    function gaussian() {
        if ($(document).scrollTop() > 1000) {
            $(".wrapper_h").css({"filter": "blur(5px)", "-webkit-filter": "blur(5px)"});
        } else {
            $(".wrapper_h").css({"filter": "none", "-webkit-filter": "none"});
        }
    }

    // Scrolling animation
    var attr = (navigator.userAgent.toLowerCase().indexOf('webkit') > 0 ? 'body' : 'html');

    $("#scrollDown").click(function () {
        $(attr).animate({scrollTop: $("#start").offset().top}, 700);
    })
})