

$(document).ready(function() {

  $('new-task').on('click', function(){

    $('.hidden-div').animate({
      opacity: 1,
      top: "-10px"
    }, 'slow');
  });
})
