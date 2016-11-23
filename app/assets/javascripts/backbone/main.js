// Create Collection of Tasks
var taskCollection = new TaskCollection();

var taskView = new TaskView({
  collection: taskCollection
});

$().ready(function() {

  $('#new-task').click(function() {
    var view = new NewTaskView();
    $('.task-detail').html(view.render().el);
    $('.datepicker').pickadate({
      selectMonths: true,
      selectYears: 15
    });
  });

  taskCollection.fetch()

  $('.task-list').append(taskView.render().el);

});
