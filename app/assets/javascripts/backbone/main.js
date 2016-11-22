var view = new NewTaskView();

$().ready(function() {
  
  $('#new-task').click(function() {
    $('.task-detail').html(view.render().el);
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
  });

});
