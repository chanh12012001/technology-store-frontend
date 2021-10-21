var width = $(window).width();
if (width <= 759){
    $('.slider-category').slick({
        slidesToShow: 5,
        slidesToScroll: 4,
        infinite: false
    });  
}
else if (width >= 759 && width <=1150){
    $('.slider-category').slick({
        slidesToShow: 7,
        slidesToScroll: 8,
        infinite: false
    }); 
}

else {
    $('.slider-category').slick({
        slidesToShow: 8,
        slidesToScroll: 8,
        infinite: false
    }); 
}

$('.col2-news-body').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  });