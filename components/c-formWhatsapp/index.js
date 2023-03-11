$('.js-openFormWhatsapp').on('click', function (e) {
   e.preventDefault();
   $('.c-formWhatsapp').addClass('is-active');
});

$('.js-closeFormWhatsapp').on('click', function (e) {
    e.preventDefault();
    $('.c-formWhatsapp').removeClass('is-active');
});