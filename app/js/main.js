$(function(){

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: '17px',
        readOnly: true
    });

    $('.slider__inner-items').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"><img src="images/slider/slide-left.png" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="images/slider/slide-right.png" alt=""></button>'
    });

    var mixer = mixitup('.products__inner-items');
    
});