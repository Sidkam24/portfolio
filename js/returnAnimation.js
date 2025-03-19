$(function () {
    const $pageTop = $(".pagetop");
  
    $(window).scroll(function () {
      if ($(window).scrollTop() > 1) {
        $pageTop.fadeIn(500).css('display', 'flex');
      } else {
        $pageTop.fadeOut(500);
      }
    });
  
    $pageTop.click(function () {
      $('html, body').animate({ scrollTop: 0 }, 400);
    });
  });