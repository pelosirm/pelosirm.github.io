$(document).on('click','.grouped-links a', function(event) {
    event.preventDefault();
    var target = "#" + this.getAttribute('data-target');
    $('html, body').animate({
        scrollTop: $(target).offset().top-100
    }, 2000);
});