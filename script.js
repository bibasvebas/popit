$('.popit__circle').on('click', function() {
    $(this).toggleClass('active');

    if ($(this).hasClass("active")) {
        new Audio("./pop.mp3").play()
    } else {
        new Audio("./andrey.mp3").play()
    }
});