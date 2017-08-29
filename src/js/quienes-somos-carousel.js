(function () {
  $('.clientes-carousel__container').slick({
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    adaptiveHeight: true,
    variableWidth: true,
    centerMode: true,
    prevArrow: '<img src="img/left-arrow.svg" class="arrow-left">',
    nextArrow: '<img src="img/right-arrow.svg" class="arrow-right">',
  });
}());
