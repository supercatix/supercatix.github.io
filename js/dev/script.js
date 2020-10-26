$(document).ready(function(){
  $('.carousel__inner').slick({
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $(".pagination__item").click(function(){
    $(this).addClass("pagination__item_active"),
    $(".pagination__item").not(this).removeClass("pagination__item_active");
  });
  $('.lazy').lazyload({
    effect : 'fadeIn'
});
});