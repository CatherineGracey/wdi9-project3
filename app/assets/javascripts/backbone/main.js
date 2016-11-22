
var view = new NewTaskView();

// Create Collection of Tasks
var taskCollection = new TaskCollection();

var taskView = new TaskView({
  collection: taskCollection
});

$().ready(function() {

  $('#new-task').click(function() {
    $('.task-detail').html(view.render().el);
  });

  // Append rendered Task collection
  taskCollection.fetch().done(function(result){
    console.log(result);
    $('.task-list').append(taskView.render().el);
  });
});
