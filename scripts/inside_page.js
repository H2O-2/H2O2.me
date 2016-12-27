$(document).ready(function () {
    headerFunc();
    scrollAnimation();
    footerBlur();

    $(window).resize(function () {
        headerFunc();
    })
});

// Header
function headerFunc() {
    $('.jumbotron').css({ height: ($(window).height()) +'px' });
}

// Scrolling animation
function scrollAnimation() {
    var attr = (navigator.userAgent.toLowerCase().indexOf('webkit') > 0 ? 'body' : 'html');

    $("#scrollDown").click(function () {
        $(attr).animate({scrollTop: $("#start").offset().top}, 700);
    })
}

// bottom gaussian blur
function footerBlur() {
    $(window).on('scroll', gaussian);

    function gaussian() {
        if ($(document).scrollTop() > 1000) {
            $(".wrapper_h").css({"filter": "blur(5px)", "-webkit-filter": "blur(5px)"});
        } else {
            $(".wrapper_h").css({"filter": "none", "-webkit-filter": "none"});
        }
    }
}

