$(document).ready(function(){
    console.log("Initializing slick slider...");
    var slider = $('.slick-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev">&#10094;</button>',
        nextArrow: '<button class="slick-next">&#10095;</button>',
        dots: true, // Add pagination dots
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    
    console.log("Slider initialized:", slider);
});
