var view = new NewTaskView();
$(document).ready(function() {
  $('.task-detail').html(view.render().el);
})
