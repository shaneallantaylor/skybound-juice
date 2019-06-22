$(document).ready(function () {
  $('#shop-menu-item').mouseover(function () {
    $('#shop-menu-item').addClass('highlight');
    $('.sub-menu-container').addClass('show');
  });

  $('#hero').mouseenter(function () {
    setTimeout(function () {
      $('.sub-menu-container').removeClass('show');
      $('#shop-menu-item').removeClass('highlight');
    }, 400)
  });

  $(".top-menu li").not("#shop-menu-item").mouseenter(function () {
    setTimeout(function () {
      $('.sub-menu-container').removeClass('show');
      $('#shop-menu-item').removeClass('highlight');
    }, 300)
  });

  $('#pencil-ad .close').click(function () {
    $('#pencil-ad .close').css("display", "none");
    $('#pencil-ad').addClass('closed');
  })

});