var view = new NewTaskView();

$().ready(function() {
  
  $('#new-task').click(function() {
    $('.task-detail').html(view.render().el);
  });

});
