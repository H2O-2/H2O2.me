$("document").ready(function (){
    if ($(window).width() > 991) {
        bigScreen()
    }
});

function bigScreen() {
    $(".move").mouseenter(function () {
        $(".wrapper").fadeTo(800, 0.2);
        $(this).siblings("h2").delay(150).animate({left: "-25%" }, 1000, $.bez([.5,.13,.37,1]));
        $(this).siblings(".welcome").delay(500).fadeIn(500);
    }).mouseleave(function () {
        $(".wrapper").fadeTo(300, .8);
        $(this).siblings("h2").delay(150).animate({left: "0" }, 1000, $.bez([.5,.13,.37,1]));
        $(this).siblings(".welcome").fadeOut(500);
    });
}

