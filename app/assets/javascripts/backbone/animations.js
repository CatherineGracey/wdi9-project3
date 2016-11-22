

$(document).ready(function() {

  $('.nav-wrapper').on('click', '.btn', function(){

    $('.hidden-div').animate({
      opacity: 1,
      top: "-10px"
    }, 'slow');
  });
})
