$(document).ready(function () {
    headerFunc();
    proResponse();
    $('.wrapper').show();
    $('footer').show();
    scrollAnimation();
    //footerBlur();

    var figure = $('div.project figure');

    figure.hover(function () {
        //$('div.project figure div.figure_bg').animate({height: figure.height()}, 600);
        $(this).children('div.figure_bg').animate({height: figure.height()}, 600);
        $(this).children('figcaption').children('h4').animate({left: 0, opacity: 1}, 500);
        $(this).children('figcaption').children('hr').delay(250).animate({width: 100 + '%'}, 300);
        $(this).children('figcaption').children('p').delay(300).animate({top: 0, opacity: 1});
    }, function () {
        $(this).children('div.figure_bg').animate({height: 0}, 600);
        $(this).children('figcaption').children('h4').animate({left: 12 + 'rem', opacity: 0}, 700);
        $(this).children('figcaption').children('hr').animate({width: 0}, 300);
        $(this).children('figcaption').children('p').animate({top: 3 + 'rem', opacity: 0});
    });

    $(window).resize(function () {
        $('.header').css({ height: ($(window).height()) +'px' });
        $('div#scrollDown').css({top: $(window).height() - $('div#scrollDown').height() + "px",
            left: $(window).innerWidth() / 2 - $('div#scrollDown').innerWidth() / 2 + "px"});

        headerResponse();
        proResponse();
    })
});

// Header text responsive
function headerResponse() {
    var text = $('.header div.container');
    if ($(window).width() < 991) {
        text.children('h1').css({marginRight: "0", fontSize: "3rem"});
        text.children('p').css({marginLeft: "0", fontSize: "2rem", marginTop: "3rem"});
    } else {
        text.children('h1').css({marginRight: "26%", fontSize: "4rem"});
        text.children('p').css({marginLeft: "54%", fontSize: "2.9rem", marginTop: "0"});
    }
}

// Header
function headerFunc() {
    var text = $('.header div.container');
    var scroll = $('div#scrollDown');
    $('.header').css({ height: ($(window).height()) +'px' });
    text.fadeIn(1200);
    if ($(window).width() <= 991) {
        text.children('h1').css({marginRight: "20%", fontSize: "3rem"}).animate({marginRight: "0"}, 1200);
        text.children('p').css({marginLeft: "20%", fontSize: "2rem", marginTop: "3rem"}).animate({marginLeft: "0"}, 1200);
    } else {
        text.children('h1').animate({marginRight: "26%"}, 1200);
        text.children('p').animate({marginLeft: "54%"}, 1200);
    }

    scroll.css({top: $(window).height() - scroll.height() + "px",
        left: $(window).innerWidth() / 2 - scroll.innerWidth() / 2 + "px"});
}

// Profile Response
function proResponse() {
    var proColumn = $('.pro_body div.col-md-6');

    if ($(window).width() <= 1366) {
        $('.pro_left').hide();
        $('.pro_right').hide();
        proColumn.show();
        if ($(window).width() <= 767) {
            proColumn.css({display: 'inline-block'});
            proColumn.addClass("col-xs-6");
        } else {
            proColumn.removeClass("col-xs-6");
        }
    } else {
        $('.pro_left').show();
        $('.pro_right').show();
        proColumn.hide();
    }
}

// Scrolling animation
function scrollAnimation() {
    var attr = (navigator.userAgent.toLowerCase().indexOf('webkit') > 0 ? 'body' : 'html');

    $("#scrollDown").click(function () {
        $(attr).animate({scrollTop: $("#start").offset().top}, 700);
    })
}
