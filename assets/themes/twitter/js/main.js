$(document).ready(function () {
  /*back to top*/
  var $backtotop = $('#backtotop');
  var top = $(window).height() - $backtotop.height() - 90;
  $backtotop.css({ top: top, right: 50 });
  $backtotop.click(function () {
    $('html,body').animate({ scrollTop: 0 });
    return false;
  });
  $(window).scroll(function () {
    var windowHeight = $(window).scrollTop();
    if (windowHeight > 200) {
      $backtotop.fadeIn();
    } else {
      $backtotop.fadeOut();
    }
  });

  $('.inner a').attr('target','_blank');
});
