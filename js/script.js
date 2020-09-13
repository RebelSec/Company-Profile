// Membuat animasi ke semua Link yang di klik
$('a').on('click', function (event) {
    var hash = this.hash;
    $('html, body').animate({
            scrollTop: $(hash).offset().top - 50
        }, 800, 'easeInOutExpo',
        function () {});
});



// Parallax
$(window).scroll(function () {

    var scroll = $(this).scrollTop();

    // untuk gambar portfolio
    if (scroll > $('.portfolio').offset().top - 250) {

        $('.portfolio .img-thumbnail').each(function (i) {
            setTimeout(function () {

                $('.portfolio .img-thumbnail').eq(i).addClass('muncul');

            }, 300 * (i + 1));
        });
    }

    if (scroll > $('.contact').offset().top - 300) {
        $('.contact').addClass('muncul');

    }
});