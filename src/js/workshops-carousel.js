(function () {
  $('.workshops-carousel__container').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    prevArrow: '<img src="img/left-arrow.svg" class="arrow-left">',
    nextArrow: '<img src="img/right-arrow.svg" class="arrow-right">',
  });
}());