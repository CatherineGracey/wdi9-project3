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

  // Append rendered Task collection
  taskCollection.fetch()
  $('.task-list').append(taskView.render().el);


  //search test
  $('#search-task').keypress(function(event) {
    // debugger
      var keycode = (event.keycode ? event.keyCode : event.which);
      if (keycode == '13') {
        query = $(this).val();
        console.log("query = " + query);
        console.log("task collection = " + taskCollection);
        // $(this).val("");
        
      }

    // when enter is pressed, get the value of the input, and filter the taskCollection.

    // render the filtered task collection

  })

  $('#search-task').focusout(function() {
    $(this).val("Search Task");
  });
 
  $('#search-task').mousedown(function() {
      $(this).val("");
  })

});
