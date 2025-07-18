$(function () {
    const $pageTop = $(".pagetop");
    $(window).scroll(function () {
      if ($(window).scrollTop() > 1) {
        $pageTop.fadeIn(500).css('display', 'flex');
        $(".container_02").fadeOut(1000);
      } else {
        $pageTop.fadeOut(500);
        $(".container_02").fadeIn(1000);
      }
    });
  
    $pageTop.click(function () {
      $('html, body').animate({ scrollTop: 0 }, 400);
    });
  });