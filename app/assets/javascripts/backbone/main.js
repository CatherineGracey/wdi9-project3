var view = new NewTaskView();

$().ready(function() {

  $('#new-task').click(function() {
    $('.task-detail').html(view.render().el);
  });

  // Create Collection of Tasks
  var view = new TaskListView({
    collection: tasks
  });
  // Append rendered Task collection
  $('.task-list').append(view.render().el);

});
