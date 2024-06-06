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
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '0'
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '0'
                }
            }
        ]
    });
    
    console.log("Slider initialized:", slider);
});
$(document).ready(function(){
    console.log("Initializing slick slider for case studies...");
    $('.case-studies').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev">&#10094;</button>',
        nextArrow: '<button class="slick-next">&#10095;</button>',
        dots: true, // Add pagination dots
    });
});
$(document).ready(function(){
    console.log("Initializing slick slider for case studies...");
    var slider = $('.case-studies').slick({
        slidesToShow: 3, // Show 3 cards at a time on larger screens
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev">&#10094;</button>',
        nextArrow: '<button class="slick-next">&#10095;</button>',
        dots: true, // Add pagination dots
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1, // Show only 1 card at a time on mobile screens
                    centerMode: true,
                    centerPadding: '0'
                }
            }
        ]
    });
    
    console.log("Slider initialized for case studies:", slider);
});



