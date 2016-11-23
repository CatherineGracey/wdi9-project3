
var view = new NewTaskView();

// Create Collection of Tasks
var taskCollection = new TaskCollection();


var taskView = new TaskView({
  collection: taskCollection
});

$().ready(function() {

  $('#new-task').click(function() {
    $('.task-detail').html(view.render().el);
    $('.datepicker').pickadate({
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 15 // Creates a dropdown of 15 years to control year
    });
  });

  taskCollection.fetch()

    $('.task-list').append(taskView.render().el);
});
