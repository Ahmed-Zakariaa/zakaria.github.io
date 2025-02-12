AOS.init();


// Recent Works Slider 
let workSlider;
function recentWorkSliderFunc() {
  if(workSlider) workSlider.destroy();
  workSlider= new Swiper('.recent-work__slider', {
    slidesPerView: 'auto',
    spaceBetween: 40,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.recent-work__slider .swiper-pagination',
      clickable: true
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 64
      }
    }
  });
}

// Our Services Slider 
let servicesSlider;
function ourServicesSliderFunc() {
  if(servicesSlider) sectorsSlider.destroy();
  servicesSlider = new Swiper(".our-services__slider", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.our-services__slider .swiper-pagination',
      clickable: true
    },
    breakpoints: {
      576: {
        slidesPerView: 1,
      },
      768: {
        spaceBetween: 64
      }
    }
  });
}




/// animation 
$(document).ready(function() {
  new WOW().init();
  ///// responsive header
  $(document).on("click", ".header--nav-btn", function() {
    $(".header").addClass("active")
  });

  $(document).on("click", ".header--mobile-overlay", function() {
    $(".header").removeClass("active")
  })
});


// Sticky Headedr
window.addEventListener('scroll' , ()=> {
  const topBtn = document.getElementById('stick-header');
  if (document.documentElement.scrollTop > 100) {
      topBtn.classList.add('sticky-head')
  } else {
      topBtn.classList.remove('sticky-head')
  }
});
function toTop () {
  document.documentElement.scrollTop = 0;
}

// Mobile Header
document.querySelector('.header__toggle').onclick= function(){
  document.querySelector('.header').classList.toggle('header--mobile-active');
}

document.querySelector('.header__mobile-overlay').onclick= function(){
  document.querySelector('.header').classList.toggle('header--mobile-active');
}

