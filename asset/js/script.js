 $(document).ready(function() {
    AOS.init({
        duration: 1200,
        startEvent: 'DOMContentLoaded',
        once: true,
    });

    /// some script
    $(function () {
      'use strict'

    $("[data-trigger]").on("click", function(){
          var trigger_id =  $(this).attr('data-trigger');
          $(trigger_id).toggleClass("show");
          $('body').toggleClass("offcanvas-active");
      });

      // close if press ESC button 
      $(document).on('keydown', function(event) {
          if(event.keyCode === 27) {
            $(".navbar-collapse").removeClass("show");
            $("body").removeClass("overlay-active");
          }
      });

      // close button 
      $(".btn-close").click(function(e){
          $(".navbar-collapse").removeClass("show");
          $("body").removeClass("offcanvas-active");
      }); 
    })

    $('.popup-youtube').magnificPopup({
        type: 'iframe'
      });
       
      $('.custom-slider-1').slick({
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        margin: 20,
        responsive: [{
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            margin: 20,
            slidesToScroll: 1
          }
        },
        {
           breakpoint: 599,
           settings: {
              arrows: false,
              slidesToShow: 1,
              margin: 20,
              slidesToScroll: 1
           }
        }]
    });
 
    const showcaseSlider = new Swiper(".home-showcaseSlider", {
      speed: 1000,
      slidesPerView: 1,
      parallax: true,
      // centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".showcaseSlider-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: '.showcaseSlider-next',
        prevEl: '.showcaseSlider-prev',
      },
    });

    const button = document.querySelector('.scollbar-btn');
    const whatsappbtn = document.querySelector('.float');

      const displayButton = () => {
        window.addEventListener('scroll', () => {
          console.log(window.scrollY);
        
          if (window.scrollY > 100) {
            button.style.display = "block";
          } else {
            button.style.display = "none";
          }
        });
      };

      const whatsappbtndisplayButton = () => {
        window.addEventListener('scroll', () => {
          console.log(window.scrollY);
        
          if (window.scrollY > 100) {
            whatsappbtn.style.display = "block";
          } else {
            whatsappbtn.style.display = "none";
          }
        });
      };

      const scrollToTop = () => {
        button.addEventListener("click", () => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'smooth'
          }); 
          console.log(event);
        });
      };

      displayButton();
      whatsappbtndisplayButton();
      scrollToTop();

      }); 

 
$(window).scroll(function(){
    if ($(window).scrollTop() >= 180) {
        $('.primary-header').addClass('fixed-header'); 
    }
    else {
        $('.primary-header').removeClass('fixed-header'); 
    }
});
 