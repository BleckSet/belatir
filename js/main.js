




$(document).ready(function(){
  $('.popular_slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true, // Заменил Infinity на infinite

    responsive: [
      {
        breakpoint: 1450,
        settings: {
          variableWidth:true,
          centerMode: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        }
      }
    ]
  });
});







$(".burger").click(function() {
  $(".burger_inner").toggleClass("open");
  $(".burger").toggleClass("active");
  $("header").toggleClass("active");
  $("html").toggleClass("hold");
});

$(document).ready(function() {
  $(".accordion-button").on("click", function() {
    var clickedAccordion = $(this);
    var content = clickedAccordion.siblings(".accordion-content");
    
    if (!clickedAccordion.hasClass('active')) {
      $(".accordion-button").removeClass('active');
      $(".accordion-content").slideUp();
      $(".accordion-inner").css('min-height', '0'); // Закрываем все аккордеоны
    }

    clickedAccordion.toggleClass('active');
    content.slideToggle(function() {
      if (content.is(':visible')) {
        // Открываем только текущий аккордеон
        var accordionInner = clickedAccordion.closest('.accordion-item').find('.accordion-inner');
        accordionInner.css('height', accordionInner.prop('scrollHeight') + 'px');
      }
    });
  });
});

$(document).ready(function () {
  $('.choose_color_item').click(function () {
    const color = $(this).data('color');
    $('.choose_color_end.active').removeClass('active');
    $('.choose_color_item.active').removeClass('active');
    $('.choose_color_end[data-desk="' + desk + '"]').addClass('active');
    $(this).addClass('active');
  });
});