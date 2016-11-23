// Create Collection of Tasks
var taskCollection = new TaskCollection();

var taskView = new TaskView({
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

  $('.task-list').append(taskView.render().el);

});
