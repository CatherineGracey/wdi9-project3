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

  $('#search-task').val("Search");
  
  $('#search-task').focus(function() {
    $(this).val("");
  });

  $('#search-task').focusout(function() {
      $(this).val("Search");
  });

  $('#search-task').bind('keypress', function(e) {
    if (e.keyCode == 13) {
      var searchResult = taskCollection.where({ title: $(this).val() });
      $(this).val("");
      console.log(searchResult);
      var searchResultCollection = new TaskCollection(searchResult)
      var view = new TaskListView({collection: searchResultCollection});
      $('.hidden-div').html(view.render().el);
      $('.hidden-div').fadeIn('slow');
      // debugger
    }
  });
  

  // Populate task collection with AJAX call
  taskCollection.fetch()
  $('.task-list').append(taskListView.el);

});
