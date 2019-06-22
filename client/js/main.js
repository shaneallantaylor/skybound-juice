$(document).ready(function () {
  $('#shop-menu-item').hover(function () {
    $('.sub-menu-container').addClass('show');
  }, function () {
    setTimeout(function () {
      $('.sub-menu-container').removeClass('show');
    }, 200)
  });
  $('.sub-menu-container').hover(function () {
    $('.sub-menu-container').addClass('show');
  }, function () {
    setTimeout(function () {
      $('.sub-menu-container').removeClass('show');
    }, 200)
  })
});