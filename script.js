$(document).ready(function () {
  $('.toggle-icon').click(function () {
    $(this).toggleClass('answer-expanded');
    $('.extra-text').toggleClass('answer-expanded');
  });
});
