window.onload = function () {
    if (window.jQuery) {
        // jQuery is loaded  
        alert("Yeah!");
    } else {
        // jQuery is not loaded
        alert("Doesn't Work");
    }
}

$('.roundR').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $('.arrow').toggleClass('bounceAlpha');
});
//$('.roundL').click(function (e) {
//    e.preventDefault();
//    e.stopPropagation();
//    $('.arrow').toggleClass('bounceAlphaL');
//});
