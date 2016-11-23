// Create Collection of Tasks
var taskCollection = new TaskCollection();

var taskListView = new TaskListView({
  collection: taskCollection
});

$().ready(function() {

  $('#new-task').click(function() {

    // Render new task form, append to hidden-div
    var view = new NewTaskView();
    $('.hidden-div').html(view.render().el);
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 15
    });
    // Reveal hidden-div
    $('.hidden-div').fadeIn("slow");
  });

  // Populate task collection with AJAX call
  taskCollection.fetch()
  $('.task-list').append(taskListView.el);

  // Make logout link submit logout form
  $('#logout-link').click(function() {
    $('#logout').submit();
  });


});
